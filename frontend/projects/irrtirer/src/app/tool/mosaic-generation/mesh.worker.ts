/// <reference lib="webworker" />

import { SectorTriangulationMeshPartsModel } from "../../core/models/api.models";
import { MosaicSetModel } from "../../shared/mosaic-generator/sectors/mosaic-set.model";
import { SectorsMapperService } from "./sectors-mapper.service";

addEventListener('message', ({ data }) => {
  data.sectorsTriangulations.forEach(mesh => SectorTriangulationMeshPartsModel.restore(mesh));

  const mosaicSet: MosaicSetModel = SectorsMapperService.mapMosaicSet(data.sectors, data.sectorsTriangulations);
  postMessage(MosaicSetModel.serialize(mosaicSet));
});

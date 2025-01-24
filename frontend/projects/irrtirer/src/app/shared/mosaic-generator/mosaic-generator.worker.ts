/// <reference lib="webworker" />

import { HtmlImageObject } from './color-compatibility/html-image-object.model';
import { SectionOrderedArgs } from './events/section-ordered-args.interface';
import { MosaicGenerator } from './mosaic-generator';
import { MosaicSetModel } from './sectors/mosaic-set.model';
import { TileTray } from './tray/tile-tray';

addEventListener('message', ({ data }) => {
    const mosaicSet: MosaicSetModel = MosaicSetModel.deserialize(data.mosaicSet);
    const tileTray: TileTray = TileTray.restore(data.tileTray);
    const imageObject: HtmlImageObject = HtmlImageObject.restore(data.imageObject);

    const generator: MosaicGenerator = new MosaicGenerator(imageObject);
    generator.sectionOrderingProgress$.subscribe((sectionOrdered: SectionOrderedArgs) => {
        postMessage(sectionOrdered);
    });

    generator.generate(mosaicSet, tileTray);
});

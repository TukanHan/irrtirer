import { Injectable } from '@angular/core';
import { TileModel } from '../../core/models/mosaic-project.model';
import { Size } from 'active-canvas';
import { Rect } from '../../core/models/math/rect.interface';
import { Vector } from '../../core/models/math/vector.model';
import { TileObject } from '../../shared/canvas-objects/tile-object';
import { transformPolygon } from '../../core/helpers/polygon/trigonometry-helper';
import { IActiveCanvas } from '../../../../../active-canvas/src/lib/models/canvas/active-canvas.interface';

interface TileWithSize {
    tile: TileModel;
    size: Size;
    radius: number;
}

interface Node {
    type: 'group' | 'leaf';
    size: Size;
}

interface NodeGroup extends Node {
    type: 'group';
    left: NodeGroup | NodeLeaf;
    right: NodeGroup | NodeLeaf;
    split: 'horizontal' | 'vertical';
}

interface NodeLeaf extends Node {
    type: 'leaf';
    value: TileModel;
}

@Injectable()
export class TrayService {
    public static drawTiles(tiles: TileModel[], activeCanvas: IActiveCanvas): void {
        const tilesWithSize: TileWithSize[] = this.sortAndMapTilesBySize(tiles);
        const tree = this.getTreeMapChartArray(tilesWithSize);
        const frame: Rect = { width: tree.size.width, height: tree.size.height, x: -tree.size.width / 2, y: -tree.size.height / 2 };
        this.drawChart(tree, frame, activeCanvas);
    }

    private static drawChart(tree: NodeGroup | NodeLeaf, frame: Rect, activeCanvas: IActiveCanvas): void {
        if (tree.type === 'group') {
            const widthSum: number = tree.left.size.width + tree.right.size.width;
            const heightSum: number = tree.left.size.height + tree.right.size.height;

            this.drawChart(
                tree.left,
                {
                    x: frame.x,
                    y: frame.y,
                    width: frame.width * (tree.split === 'horizontal' ? tree.left.size.width / widthSum : 1),
                    height: frame.height * (tree.split === 'horizontal' ? 1 : tree.left.size.height / heightSum),
                },
                activeCanvas
            );
            this.drawChart(
                tree.right,
                {
                    x: frame.x + (tree.split === 'horizontal' ? frame.width * (tree.left.size.width / widthSum) : 0),
                    y: frame.y + (tree.split === 'horizontal' ? 0 : frame.height * (tree.left.size.height / heightSum)),
                    width: frame.width * (tree.split === 'horizontal' ? tree.right.size.width / widthSum : 1),
                    height: frame.height * (tree.split === 'horizontal' ? 1 : tree.right.size.height / heightSum),
                },
                activeCanvas
            );
        } else {
            const worldTileVertices: Vector[] = transformPolygon(
                tree.value.vertices,
                new Vector(frame.x + frame.width / 2, frame.y + frame.height / 2),
                0
            );
            const tileObject: TileObject = new TileObject(worldTileVertices, tree.value.color);
            activeCanvas.addCanvasObject(tileObject);
        }

        /*
        this.activeCanvas.addCanvasObject(new ClosedContourObject([
            new Vector(frame.x, frame.y),
            new Vector(frame.x + frame.width, frame.y),
            new Vector(frame.x + frame.width, frame.y + frame.height),
            new Vector(frame.x, frame.y + frame.height),
        ], "#000000"));
        */
    }

    private static getTreeMapChartArray(tileWithRadiusArr: TileWithSize[]): NodeGroup | NodeLeaf {
        if (tileWithRadiusArr.length > 1) {
            const splittedParts = this.splitTileArrayInHalf(tileWithRadiusArr);

            const left = this.getTreeMapChartArray(splittedParts[0]);
            const right = this.getTreeMapChartArray(splittedParts[1]);

            const split = (left.size.height + right.size.height) * 1.5 < left.size.width + right.size.width ? 'vertical' : 'horizontal';
            return {
                type: 'group',
                split,
                size: {
                    width: split === 'horizontal' ? left.size.width + right.size.width : Math.max(left.size.width, right.size.width),
                    height: split === 'horizontal' ? Math.max(left.size.height, right.size.height) : left.size.height + right.size.height,
                },
                left,
                right,
            };
        } else {
            return {
                type: 'leaf',
                size: this.getTileSize(tileWithRadiusArr[0].tile),
                value: tileWithRadiusArr[0].tile,
            };
        }
    }

    private static sortAndMapTilesBySize(tiles: TileModel[]): TileWithSize[] {
        return tiles
            .map((tile) => {
                const size: Size = this.getTileSize(tile);
                const radius: number = size.height * size.height + size.width * size.width;
                return { tile, size, radius };
            })
            .sort((a, b) => b.radius - a.radius);
    }

    private static splitTileArrayInHalf(tileWithRadiusArr: TileWithSize[]): TileWithSize[][] {
        const sum = tileWithRadiusArr.reduce((acc, curr) => acc + curr.size.width, 0);
        const sumMid = sum / 2;

        let splitIndex = tileWithRadiusArr.length - 1;
        let currentSum = tileWithRadiusArr[splitIndex].size.width;

        for (let i = tileWithRadiusArr.length - 2; i > 0; i--) {
            const element = tileWithRadiusArr[i];
            currentSum += element.size.width;
            if (currentSum > sumMid) {
                splitIndex = i;
                break;
            }
        }

        return [tileWithRadiusArr.slice(0, splitIndex), tileWithRadiusArr.slice(splitIndex)];
    }

    private static getTileSize(tile: TileModel): Size {
        return {
            width: Math.max(...tile.vertices.map((vertex) => vertex.x)) - Math.min(...tile.vertices.map((vertex) => vertex.x)),
            height: Math.max(...tile.vertices.map((vertex) => vertex.y)) - Math.min(...tile.vertices.map((vertex) => vertex.y)),
        };
    }
}

import { notStrictEqual } from 'assert';
import { EnumFactoryBase } from 'lite-ts-enum';
import { Mock, mockAny } from 'lite-ts-mock';
import { RpcBase } from 'lite-ts-rpc';

import { LuckyDrawFactory as Self } from './lucky-draw-factory';

describe('src/lucky-draw-factory.ts', () => {
    describe('.findLuckyDrawServices()', () => {
        it('ok', async () => {
            const enumFactoryMock = new Mock<EnumFactoryBase>();
            const rpcMock = new Mock<RpcBase>();
            const self = new Self('lucky-draw', enumFactoryMock.actual, rpcMock.actual);

            rpcMock.expectReturn(
                r => r.call(mockAny),
                {
                    userValues: {
                        68: 0
                    },
                    luckyDraws: [
                        {
                            entry: {
                                value: 1,
                            },
                            values: {}
                        }
                    ]
                }
            );

            const res = await self.findLuckyDrawServices();
            notStrictEqual(res[1], undefined);
        });
    });
});
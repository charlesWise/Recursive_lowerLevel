'use strict'
import React, { Component } from 'react';
import ScreenComponent from './../../../components/ScreenComponent';
import SourceStore from './SourceItem';

class BonusDetail extends ScreenComponent {
    static pageConfig = {
        path: '/merchant/bonusdetail',
    }
    constructor(...props) {
        super(...props);
        this.navigationOptions = {
        }
        this.state = {
            sourceData: {
                "id": "1",
                "name": "测试福利券（勿删）",
                "sub": [
                    {
                        "id": "9",
                        "name": "测试子福利券1（勿删）",
                        "sub": [
                            {
                                "id": "20",
                                "name": "绿岸",
                                "is_end": "1",
                                "is_open": "1"
                            },
                            {
                                "id": "22",
                                "name": "紫光阁大酒店",
                                "is_end": "1",
                                "is_open": "1"
                            },
                            {
                                "id": "26",
                                "name": "紫光阁",
                                "is_end": "1",
                                "is_open": "1"
                            }
                        ]
                    },
                    {
                        "id": "10",
                        "name": "测试子福利券2（勿删）",
                        "sub": [
                            {
                                "id": "21",
                                "name": "疯狂哈克卤肉饭",
                                "sub": [
                                    {
                                        "id": "27",
                                        "name": "疯狂哈克卤肉饭",
                                        "is_end": "1",
                                        "is_open": "1"
                                    },
                                    {
                                        "id": "28",
                                        "name": "疯狂哈克",
                                        "is_end": "1",
                                        "is_open": "1"
                                    }
                                ]
                            },
                            {
                                "id": "24",
                                "name": "疯狂哈克",
                                "is_end": "1",
                                "is_open": "1"
                            }
                        ]
                    },
                    {
                        "id": "11",
                        "name": "怡春院",
                        "is_end": "1",
                        "is_open": "1"
                    }
                ]
            }
        }
    }
    _sourceSearch() {
        return (
            <SourceStore
                ref={v => this.SourceStore = v}
                sourceData={this.state.sourceData}
                openLowerLevel={(sourceData) => this.openLowerLevel(sourceData)}
                getStoreInfo={(id, storeName, isEnd, sourceData) => this.getStoreInfo(id, storeName, isEnd, sourceData)} />
        )
    }
    render() {
        return (
            <div className="bonus-detail-wrapper">
                <div className="bonus-select-area">
                    <ul className="select-area">
                    {this._rewardTypeSearch()}
                    </ul>
                </div>
            </div>
        );
    }
}

export default BonusDetail;
## Recursive_lowerLevel
递归实现无限级数据嵌套

###接口数据格式
```
{
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
                    "is_end": "1"
                },
                {
                    "id": "22",
                    "name": "紫光阁大酒店",
                    "is_end": "1",
                },
                {
                    "id": "26",
                    "name": "紫光阁",
                    "is_end": "1"
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
                            "is_end": "1"
                        },
                        {
                            "id": "28",
                            "name": "疯狂哈克",
                            "is_end": "1"
                        }
                    ]
                },
                {
                    "id": "24",
                    "name": "疯狂哈克",
                    "is_end": "1"
                }
            ]
        },
        {
            "id": "11",
            "name": "怡春院",
            "is_end": "1"  //是否最后一级
        }
    ]
}
```

###调用方式
```
openLowerLevel方法更新state状态
openLowerLevel(sourceData) {
    console.log(sourceData)
    this.setState({sourceData})
}
getStoreInfo方法回调回去对应选择id级数据等
getStoreInfo(id, storeName, isEnd, sourceData) {
    if(isEnd == 1) {
        this.setState({
            storeId: id,
            sourceData,
            storeName,
            isMaskTabOne: !this.state.isMaskTabOne,
            isMaskTabTwo: false,
            isMaskTabThree: false
        }, () => {
            this._getRewardList()
        });
    }
}
<SourceStore
    ref={v => this.SourceStore = v}
    sourceData={this.state.sourceData}
    openLowerLevel={(sourceData) => this.openLowerLevel(sourceData)}
    getStoreInfo={(id, storeName, isEnd, sourceData) => this.getStoreInfo(id, storeName, isEnd, sourceData)} />
```
```
https://github.com/chenrunsheng1991/Recursive_lowerLevel/WX20180203-162558@2x.png
```
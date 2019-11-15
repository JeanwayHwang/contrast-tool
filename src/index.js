Component({
    properties: {},
    data: {
        x: 0,
        y: 0,
        opacity: .5,
        designImgHei: 0,
        movable: true,
        refrenceImg: ''
    },
    methods: {
        imgLoaded: function(e){
            swan.getSystemInfo({
                success: res => {
                    this.setData({
                        designImgHei: e.detail.height / e.detail.width * res.screenWidth
                    });
                }
            });
        },
        changingOpacity: function(e){
            this.setData({
                opacity: e.detail.value / 100
            });
        },
        openRefrence: function(){
            swan.chooseImage({
                count: 1,
                sourceType: ['album'], // 可以指定来源是相册还是相机，默认二者都有
                success: (res, tempFiles) => {
                    // 成功则返回图片的本地文件路径列表 tempFilePaths
                    console.log(res, tempFiles, res.tempFilePaths);
                    this.setData({
                        refrenceImg: res.tempFilePaths[0]
                    });
                },
                fail: err => {
                    console.log('上传图片异常：' + err.errMsg);
                }
            });
        },
        fixedRefrence: function(){
            this.setData({
                movable: !this.data.movable
            });
        },
        resetRefrence: function(){
            this.setData({
                x: 0,
                y: 0
            });
        }
    }
})
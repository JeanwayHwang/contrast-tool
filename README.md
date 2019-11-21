# contrast-tool

> 百度智能小程序视觉稿比对调试工具


### Preview

![工具使用预览](https://github.com/JeanwayHwang/contrast-tool/blob/master/asset/preview.png)

### Usage


1、进入小程序根目录

2、npm install contrast-tool -D // 安装比对工具组件

3、以pages/home/home为例，配置其对应的home.json

```
{
    "usingComponents": {
        "contrast-tool": "contrast-tool"
    }
}

```

4、至此，在home页面的swan文件中，就可以像使用基础组件一样使用自定义组件（contrast-tool）

### Tips


除原生开发外，常见的类现代框架 (vue/react) 框架开发场景下也可以直接使用当前自定义组件

以Okam框架为例：

```
<template>
    <contrast-tool/>
</template>

<script>
import ContrastTool from 'contrast-tool';

export default {
    components: {
        ContrastTool
    }
}
</script>
```

### 已知问题

上传视觉稿图片采用的是chooseImage API（本用于移动设备） contrast-tool在百度开发者工具历史版本（如2.14.1）的开发者工具可正常上传视觉稿

（上传的图片会默认启动本地服务&存放如http://127.0.0.1:8199/program/xxx.jpg）

不过最新版2.17.1存在无法顺利上传问题（上传图片为临时路径，无法被Image组件读取，待后续完善修复）
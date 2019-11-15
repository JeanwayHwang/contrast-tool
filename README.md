# contrast-tool

> 百度智能小程序视觉稿比对调试工具

### Usage


1、进入小程序根目录

2、npm install contrast-tool // 安装比对工具组件

3、以pages/home/home为例，配置其对应的home.json

```
{
    "usingComponents": {
        "custom": "/components/custom/custom"
    }
}

```

4、至此，在home页面的swan文件中，就可以像使用基础组件一样使用自定义组件（contrast-tool）

### Tips


除去常见的原生小程序语法的开发模式，常见的类现代框架 (vue/react) 框架开发场景下也可以直接使用当前自定义组件

以Okam框架为例：

```
<template>
    <ContrastTool/>
</template>

<script>
import ContrastTool from './contrast-tool/index';

export default {
    components: {
        ContrastTool
    }
}
</script>
```
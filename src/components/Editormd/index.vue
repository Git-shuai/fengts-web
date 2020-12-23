<template>
    <div class="mavonEditor">
        <mavon-editor
                :codeStyle="toolbarsOption.codeStyle"
                :fontSize="toolbarsOption.fontSize"
                :ishljs="true"
                :toolbars="toolbarsOption"
                v-model="value"/>
    </div>
</template>

<script>
    export default {
        name: "Editormd",
        props:{
        },
        data(){
            return{
                //工具栏

                toolbarsOption: {
                    bold: true, // 粗体
                    italic: true, // 斜体
                    header: true, // 标题
                    underline: true, // 下划线
                    strikethrough: true, // 中划线
                    mark: true, // 标记
                    superscript: true, // 上角标
                    subscript: true, // 下角标
                    quote: true, // 引用
                    ol: true, // 有序列表
                    ul: true, // 无序列表
                    link: true, // 链接
                    imagelink: true, // 图片链接
                    code: true, // code
                    table: true, // 表格
                    fullscreen: true, // 全屏编辑
                    readmodel: true, // 沉浸式阅读
                    htmlcode: true, // 展示html源码
                    help: true, // 帮助
                    /* 1.3.5 */
                    undo: true, // 上一步
                    redo: true, // 下一步
                    trash: true, // 清空
                    save: true, // 保存（触发events中的save事件）
                    /* 1.4.2 */
                    navigation: true, // 导航目录
                    /* 2.1.8 */
                    alignleft: true, // 左对齐
                    aligncenter: true, // 居中
                    alignright: true, // 右对齐
                    /* 2.2.1 */
                    subfield: true, // 单双栏模式
                    preview: true, // 预览
                    codeStyle: "atom-one-dark",
                    fontSize: "15px",
                },
                value: "```css\n" +
                    "    <div class=\"mavonEditor\">\n" +
                    "        <mavon-editor\n" +
                    "                :codeStyle=\"markdownOption.codeStyle\"\n" +
                    "                :ishljs=\"true\"\n" +
                    "                :toolbars=\"markdownOption\"\n" +
                    "                v-model=\"value\"/>\n" +
                    "    </div>\n" +
                    "```\n" +
                    "```java\n" +
                    "public class HelloWorld {\n" +
                    "    public static void main(String[] args) {\n" +
                    "        System.out.println(\"Hello World\");\n" +
                    "    }\n" +
                    "}\n" +
                    "```\n" +
                    "```css\n" +
                    "    <div class=\"mavonEditor\">\n" +
                    "        <mavon-editor\n" +
                    "                :codeStyle=\"markdownOption.codeStyle\"\n" +
                    "                :ishljs=\"true\"\n" +
                    "                :toolbars=\"markdownOption\"\n" +
                    "                v-model=\"value\"/>\n" +
                    "    </div>\n" +
                    "```\n" +
                    "```java\n" +
                    "public class HelloWorld {\n" +
                    "    public static void main(String[] args) {\n" +
                    "        System.out.println(\"Hello World\");\n" +
                    "    }\n" +
                    "}\n" +
                    "```\n" +
                    "```css\n" +
                    "    <div class=\"mavonEditor\">\n" +
                    "        <mavon-editor\n" +
                    "                :codeStyle=\"markdownOption.codeStyle\"\n" +
                    "                :ishljs=\"true\"\n" +
                    "                :toolbars=\"markdownOption\"\n" +
                    "                v-model=\"value\"/>\n" +
                    "    </div>\n" +
                    "```\n" +
                    "```java\n" +
                    "public class HelloWorld {\n" +
                    "    public static void main(String[] args) {\n" +
                    "        System.out.println(\"Hello World\");\n" +
                    "    }\n" +
                    "}\n" +
                    "```\n"
            }
        },
        methods: {
        }
    }
</script>

<style lang="scss" scoped>
    .mavonEditor {
        width: 100%;
        height: 100%;
    }
</style>

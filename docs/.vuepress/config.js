function createChapter(length) {
    return new Array(length).fill("chapter").map((item, index) => {
        if (index < 10) {
            return item + "0" + (index + 1);
        } else {
            return item + (index + 1);
        }
    })
}

function createPath(pathName, pageNumber) {
    return `/${pathName}/chapter${pageNumber}/`
}

console.log([...createChapter(3)])

module.exports = {
    base: '/Blog/',
    title: "SorryMaker",
    description: "Just playing around",
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        logo: "/assets/img/head.png",
        nav: [
            {
                text: "JavaScript",
                items: [
                    {
                        text: "基本概念",
                        items: [
                            {text: "数据类型", link: createPath("JavaScript", "01")},
                            {text: "操作符", link: createPath("JavaScript", "02")},
                            {text: "语句", link: createPath("JavaScript", "03")},
                        ],
                    },
                    {
                        text: "引用类型",
                        items: [
                            {text: "数据类型", link: "/JavaScript/#数据类型"},
                            {text: "Boolean", link: "/JavaScript/#boolean-类型"},
                        ],
                    },
                    {
                        text: "面向对象的程序设计",
                        items: [
                            {text: "数据类型", link: "/JavaScript/#数据类型"},
                            {text: "Boolean", link: "/JavaScript/#boolean-类型"},
                        ],
                    },
                    {
                        text: "函数表达式",
                        items: [
                            {text: "数据类型", link: "/JavaScript/#数据类型"},
                            {text: "Boolean", link: "/JavaScript/#boolean-类型"},
                        ],
                    },
                    {
                        text: "BOM",
                        items: [
                            {text: "数据类型", link: "/JavaScript/#数据类型"},
                            {text: "Boolean", link: "/JavaScript/#boolean-类型"},
                        ],
                    },
                    {
                        text: "客户端检测",
                        items: [
                            {text: "数据类型", link: "/JavaScript/#数据类型"},
                            {text: "Boolean", link: "/JavaScript/#boolean-类型"},
                        ],
                    },
                    {
                        text: "DOM",
                        items: [
                            {text: "数据类型", link: "/JavaScript/#数据类型"},
                            {text: "Boolean", link: "/JavaScript/#boolean-类型"},
                        ],
                    },
                    {
                        text: "DOM扩展",
                        items: [
                            {text: "数据类型", link: "/JavaScript/#数据类型"},
                            {text: "Boolean", link: "/JavaScript/#boolean-类型"},
                        ],
                    },
                    {
                        text: "DOM2和DOM3",
                        items: [
                            {text: "数据类型", link: "/JavaScript/#数据类型"},
                            {text: "Boolean", link: "/JavaScript/#boolean-类型"},
                        ],
                    },
                    {
                        text: "事件",
                        items: [
                            {text: "数据类型", link: "/JavaScript/chapter01.md/#数据类型"},
                            {text: "Boolean", link: "/JavaScript/#boolean-类型"},
                        ],
                    },
                    {
                        text: "表单脚本",
                        items: [
                            {text: "数据类型", link: "/JavaScript/#数据类型"},
                            {text: "Boolean", link: "/JavaScript/#boolean-类型"},
                        ],
                    },
                    {
                        text: "使用Canvas绘图",
                        items: [
                            {text: "数据类型", link: "/JavaScript/#数据类型"},
                            {text: "Boolean", link: "/JavaScript/#boolean-类型"},
                        ],
                    },
                    {
                        text: "HTML5脚本编程",
                        items: [
                            {text: "数据类型", link: "/JavaScript/#数据类型"},
                            {text: "Boolean", link: "/JavaScript/#boolean-类型"},
                        ],
                    },
                    {
                        text: "错误处理与调试",
                        items: [
                            {text: "数据类型", link: "/JavaScript/#数据类型"},
                            {text: "Boolean", link: "/JavaScript/#boolean-类型"},
                        ],
                    },
                    {
                        text: "Javasript与XML",
                        items: [
                            {text: "数据类型", link: "/JavaScript/#数据类型"},
                            {text: "Boolean", link: "/JavaScript/#boolean-类型"},
                        ],
                    },
                    {
                        text: "E4X",
                        items: [
                            {text: "数据类型", link: "/JavaScript/#数据类型"},
                            {text: "Boolean", link: "/JavaScript/#boolean-类型"},
                        ],
                    },
                    {
                        text: "JSON",
                        items: [
                            {text: "数据类型", link: "/JavaScript/#数据类型"},
                            {text: "Boolean", link: "/JavaScript/#boolean-类型"},
                        ],
                    },
                    {
                        text: "Ajax与Comet",
                        items: [
                            {text: "数据类型", link: "/JavaScript/#数据类型"},
                            {text: "Boolean", link: "/JavaScript/#boolean-类型"},
                        ],
                    },
                    {
                        text: "高级技巧",
                        items: [
                            {text: "数据类型", link: "/JavaScript/#数据类型"},
                            {text: "Boolean", link: "/JavaScript/#boolean-类型"},
                        ],
                    },
                    {
                        text: "离线应用与客户端存储",
                        items: [
                            {text: "数据类型", link: "/JavaScript/#数据类型"},
                            {text: "Boolean", link: "/JavaScript/#boolean-类型"},
                        ],
                    },
                    {
                        text: "最佳实践",
                        items: [
                            {text: "数据类型", link: "/JavaScript/#数据类型"},
                            {text: "Boolean", link: "/JavaScript/#boolean-类型"},
                        ],
                    },
                    {
                        text: "新兴API",
                        items: [
                            {text: "数据类型", link: "/JavaScript/#数据类型"},
                            {text: "Boolean", link: "/JavaScript/#boolean-类型"},
                        ],
                    },
                ],
            },
            {
                text: "JavaScriptCore",
                items: [
                    {text: "数据类型", link: createPath("JavaScriptCore", "01")},
                    {text: "继承", link: createPath("JavaScriptCore", "02")}
                ]
            },
            {
                text: "TypeScript",
                items: [
                    {
                        text: "基本概念",
                        items: [
                            {text: "日常类型", link: createPath("TypeScript", "01")},
                            {text: "特殊类型", link: createPath("TypeScript", "02")},
                            {text: "语句", link: createPath("TypeScript", "03")},
                        ],
                    },
                ]
            },
            {
                text: "Node",
                items: [
                    {
                        text: "fs模块", link: createPath("Node", "01")
                    }
                ]
            },
            {
                text: "Vue",
                items: [
                    {
                        text: "Vue2",
                        items: [
                            {text: "指令", link: "/Vue2/chapter01.md/"},
                        ],
                    },
                    {
                        text: "Vue3",
                        items: [
                            {text: "setup", link: "/Vue3/chapter01.md/"},
                        ],
                    }
                ]
            },

        ],
        sidebar: {
            "/JavaScript/": [...createChapter(3)],
            "/JavaScriptCore/": [...createChapter(3)],
            "/TypeScript/": [...createChapter(3)],
            "/Node/": [...createChapter(3)],
            "/Vue2/": [...createChapter(3)],
            "/Vue3/": [...createChapter(3)],

        },
        sidebarDepth: 2,
    },
};

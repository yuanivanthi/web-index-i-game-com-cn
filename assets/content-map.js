const contentMap = {
  sections: [
    {
      id: "game-news",
      title: "游戏资讯",
      keywords: ["爱游戏", "新游发布", "游戏动态"],
      items: [
        { title: "爱游戏平台夏季活动开启", url: "https://web-index-i-game.com.cn/news/summer-event" },
        { title: "热门手游排行榜更新", url: "https://web-index-i-game.com.cn/news/top-mobile" }
      ]
    },
    {
      id: "game-guides",
      title: "攻略中心",
      keywords: ["爱游戏", "攻略", "通关技巧"],
      items: [
        { title: "爱游戏新手入门指南", url: "https://web-index-i-game.com.cn/guides/newbie" },
        { title: "隐藏关卡解锁方法", url: "https://web-index-i-game.com.cn/guides/hidden-level" }
      ]
    },
    {
      id: "community",
      title: "玩家社区",
      keywords: ["爱游戏", "社区", "讨论"],
      items: [
        { title: "爱游戏玩家论坛", url: "https://web-index-i-game.com.cn/community/forum" },
        { title: "本周热门话题", url: "https://web-index-i-game.com.cn/community/hot-topics" }
      ]
    }
  ],
  tags: [
    { name: "爱游戏", related: ["新游", "攻略", "社区"] },
    { name: "新游", related: ["爱游戏", "测试", "预约"] },
    { name: "攻略", related: ["爱游戏", "技巧", "秘籍"] }
  ]
};

function searchSections(query) {
  const results = [];
  const lowerQuery = query.toLowerCase();
  contentMap.sections.forEach(section => {
    const matchTitle = section.title.toLowerCase().includes(lowerQuery);
    const matchKeyword = section.keywords.some(k => k.toLowerCase().includes(lowerQuery));
    const matchItems = section.items.some(item =>
      item.title.toLowerCase().includes(lowerQuery) ||
      item.url.toLowerCase().includes(lowerQuery)
    );
    if (matchTitle || matchKeyword || matchItems) {
      results.push(section);
    }
  });
  return results;
}

function filterByTag(tagName) {
  return contentMap.sections.filter(section =>
    section.keywords.some(k => k.toLowerCase() === tagName.toLowerCase())
  );
}

function getAllItems() {
  const all = [];
  contentMap.sections.forEach(section => {
    section.items.forEach(item => {
      all.push({
        ...item,
        section: section.title,
        sectionId: section.id
      });
    });
  });
  return all;
}

function getRelatedTags(keyword) {
  const tag = contentMap.tags.find(t => t.name.toLowerCase() === keyword.toLowerCase());
  return tag ? tag.related : [];
}

const sampleSearch = searchSections("爱游戏");
const sampleFilter = filterByTag("攻略");
const sampleAll = getAllItems();
const sampleRelated = getRelatedTags("爱游戏");
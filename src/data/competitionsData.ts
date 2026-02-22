import { Competition } from "@/types/api";

export const competitionsData: Competition[] = [
  {
    id: 1,
    name: '中国大学生服务外包创新创业大赛校内选拔赛',
    subtitle: '紧贴服务外包、创新创业主题，以应用为导向，加强产学互动，搭建大学生服务外包创新创业能力展示平台',
    backgroundUrl: 'https://image.kmoon.fun/20260222-483445.png',
    link: '',
    officialWebsite: 'https://www.fwwb.org.cn/',
    organizer: '计算机与人工智能学院',
    timeline: [
      { label: '报名开始', date: new Date('2026-02-11') },
      { label: '作品材料提交截止', date: new Date('2026-03-09') }
    ],
  },
  {
    id: 2,
    name: '中国高校计算机大赛-人工智能创意赛校内选拔赛',
    subtitle: '参赛作品须基于百度飞桨及文心大模型相关技术，在飞桨AI Studio星河社区完成相关模型开发、模型部署、模型调用和产品托管/上线的全流程。',
    backgroundUrl: 'http://aicontest.baidu.com/images/2025/banner.jpg',
    link: 'http://i.whut.edu.cn/xxtg/znbm/jwc/202506/t20250624_614953.shtml',
    officialWebsite: 'http://aicontest.baidu.com/',
    organizer: '计算机与人工智能学院',
    timeline: [
      { label: '报名开始', date: new Date('2025-06-24') },
      { label: '作品材料提交截止', date: new Date('2025-07-04') }
    ],
  },
  {
    id: 3,
    name: '全球校园人工智能算法精英大赛校内选拔赛',
    link: 'http://i.whut.edu.cn/xxtg/znbm/jwc/202507/t20250707_615955.shtml',
    subtitle: '大赛秉持“以赛促学、以赛促教、以赛促创”的理念，搭建全球校园学子同台竞技舞台，激发探索算法世界热情，培养算法创新意识，增强自信、开拓视野、凝结友谊，助力青年学子成长。',
    backgroundUrl: 'https://image.kmoon.fun/20260222-330617.png',
    officialWebsite: 'https://www.aicomp.cn/',
    organizer: '计算机与人工智能学院',
    timeline: [
      { label: '报名开始', date: new Date('2025-07-07') },
      { label: '产业命题赛道、算法主题赛道报名截止时间', date: new Date('2025-10-05') },
      { label: '其他赛道报名截止时间', date: new Date('2025-10-10') },
      { label: '产业命题赛道、算法主题赛道报名截止时间', date: new Date('2025-10-05 23:59') },
      { label: '其他赛道报名截止时间', date: new Date('2025-10-10 23:59') },
    ],
  }
];
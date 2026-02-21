import { Competition } from "@/types/api";

export const competitionsData: Competition[] = [
  {
    id: 1,
    name: '第十七届“中国大学生服务外包创新创业大赛”校内选拔赛',
    link: '',
    officialWebsite: 'https://www.fwwb.org.cn/',
    organizer: '计算机与人工智能学院',
    timeline: [
      { label: '报名开始', date: new Date('2026-02-11') },
      { label: '作品材料提交截止', date: new Date('2026-03-09') }
    ],
  }
]; 
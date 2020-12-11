import b from "Img/b.png";
import km from "Img/km.png";
import mk from "Img/mk.png";
import dh from "Img/dh.png";
import jw from "Img/jw.png";
import ss from "Img/ss.png";
import sm from "Img/sm.png";
import mojito from "Img/mojito.png";
import now from "Img/now.png";

const ProjectList = [
  {
    condition: false,
    img: now,
    title: "instaFeel",
    desc: "인스타그램 관련 App 서비스",
    date: "현재 작업 중",
    link: [],
    person: {
      Blender: [b, "Crew", ""],
      "Maximize.H": [dh, "Service Operator", ""],
      Bogus: [jw, "Product Manager", ""],
      Jenna: [sm, "UI/UX Designer", ""],
      Flodo: [mk, "Backend Dev", ""],
      Soogoon: [ss, "iOS Dev", ""],
      Moon: [km, "Growth Hacker", ""],
    },
  },
  {
    condition: true,
    img: mojito,
    title: "모지또",
    desc: "데일리 이모지 다이어리",
    date: "20/05/07",
    link: [
      {
        ch: "iOS App",
        url:
          "https://apps.apple.com/kr/app/%EB%AA%A8%EC%A7%80%EB%98%90-%EB%8D%B0%EC%9D%BC%EB%A6%AC-%EC%9D%B4%EB%AA%A8%EC%A7%80-%EB%8B%A4%EC%9D%B4%EC%96%B4%EB%A6%AC/id1508866668",
      },
    ],
    person: {
      Blender: [b, "Jenna 외 5명 참여", "만만치 않은 일기장"],
      "Maximize.H": [dh, "Service Operator", "역시나 인생은 한 방이 아니다"],
      Bogus: [jw, "Product Manager", "어려운 만큼 많이 배웠다"],
      Jenna: [sm, "UI/UX Designer", "사람 욕심엔 끝이 없다"],
      Flodo: [mk, "Backend Dev", "개발자 구합니다"],
      Soogoon: [ss, "iOS Dev", "iOS의 길은 멀고도 험하다"],
      Moon: [km, "Growth Hacker", "좋은 동료와 함께해서 좋았다"],
    },
  },
];

export default ProjectList;

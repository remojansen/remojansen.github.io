import React from "react";
import { ContentCard } from "../components/ContentCard";
import { Section } from "../components/Section";

export interface TalkIten {
  year: string;
  title: string;
  event: string;
  slidesId: string;
  customUrl?: string;
}

const talkItems: TalkIten[] = [
  {
    year: "2020",
    title: "Type-safe infrastructure as Code with TypeScript",
    event: "Sevilla TypeScript Meetup",
    slidesId:
      "2PACX-1vThbAALhSRyKIV8dWGXm1o6ch_Ciln3YF8WMHyFMQL2WxOEUyKBLB8zk4u04wEqKPIdUK9QoTxwWywM",
  },
  {
    year: "2020",
    title: "Modern Database Access for TypeScript & Node.js",
    event: "Sevilla TypeScript Meetup",
    slidesId:
      "2PACX-1vRA-UuFodkAXqjWq5HcnCUCRaEyTKqg_7mYOyECBeNnocPV8VakhnoiqB9ZWIbYNWeMKq1rYJFq3MI_",
  },
  {
    year: "2019",
    title: "React web apps on Azure",
    event: "Microsoft Azure Discovery Day",
    slidesId:
      "2PACX-1vRSfAyx6MAeWseLjJbkNB1EfnT1S7XesGxtYSBvGas58ZkaUu14lxsgnpksklJ6KLZ5pfBFXT4s-CbL",
  },
  {
    year: "2019",
    title: "How does the TypeScript compiler work? v2.0",
    event: "Dublin JavaScript Meetup",
    slidesId:
      "2PACX-1vR24l0iwglJcfe-gkpYDDwHTuHyYYAU9MxznlwHb62g5r6dV5R73iiPr6d9pHB9Ra9oM4mnk_RObkLD",
  },
  {
    year: "2019",
    title: "Getting Started with React and TypeScript",
    event: "Dublin TypeScript Meetup",
    slidesId:
      "2PACX-1vTdAhsQMOyFvIhedTWxp_vNpsr70RHhbUtwCrWxlBwwIMrwviMH_IkSTJoelq21eBskrvWi61nlJMGq",
  },
  {
    year: "2018",
    title: "JavaScript / TypeScript development fundamentals",
    event: "CCT College Dublin",
    slidesId:
      "2PACX-1vTg-4UdvunPhWBojXJlNaYyrHvADfm3q32fAUs6jKVm9h7vJnO_8_TvynGszooQthtB55bpDlofOL8Y",
  },
  {
    year: "2018",
    title: "JavaScript deep dive",
    event: "CCT College Dublin",
    slidesId:
      "2PACX-1vTBafef93GMpuuQjR8sDm_tqg1FC3cLV0C199-uEHFyZPUxR6dNgn19VeSpG8lwRvMftGTLzYePftlZ",
  },
  {
    year: "2018",
    title: "JavaScript in the backend",
    event: "CCT College Dublin",
    slidesId:
      "2PACX-1vTya4_bOW4CypQiklEd20cvw_gLoXUJdUl0D7br6zXNBt9VIuv90lA9R-Ys_75rG5TF190szq3mCndC",
  },
  {
    year: "2018",
    title: "Introduction to Web APIs",
    event: "CCT College Dublin",
    slidesId:
      "2PACX-1vQf4E3WPZBrwQzSyaUEVtVTfFrEDgDlh3v_uMRuqviDahbFIVWBrsHm_MdB1Efbigkm-GjKYpQPGAa4",
  },
  {
    year: "2018",
    title: "Working with databases",
    event: "CCT College Dublin",
    slidesId:
      "2PACX-1vRl7JVhY0fkwVrZPYcVaqZEanXX0dpFhbL6yxyQ8cG6egDM4ITeWNlVGJkLR6Oqi3nSPVSPvi7BgTFK",
  },
  {
    year: "2018",
    title: "Application authentication and security",
    event: "CCT College Dublin",
    slidesId:
      "2PACX-1vS_G4c4a39VTVLbk1_ruuYltNzLIie9feIhLaAmZpCFvnXWC0RL_-_7Nks51d6iVC2XmeAXbGUuE-gr",
  },
  {
    year: "2018",
    title: "Automated testing",
    event: "CCT College Dublin",
    slidesId:
      "2PACX-1vT83uCN2K_BVA3OxIPpN0PQYhzV5XprBIst9u5Mmnf3B1v0rz-OPfDWu6-LFrk0y05K6xuPcw9uGXVW",
  },
  {
    year: "2018",
    title: "Application performance and scalability",
    event: "CCT College Dublin",
    slidesId:
      "2PACX-1vSjNXadqanePmV47jFA2vUDcBLSNcWv1zwVKdNfDH7_4JUjKyyHuMVgNXRGjhWLoIjowdgAlsM2qkJp",
  },
  {
    year: "2018",
    title: "Join the JavaScript tooling revolution powered by TypeScript",
    event: "Dublin JavaScript Meetup",
    slidesId:
      "2PACX-1vST3nS1wuRiXdu9_7nrRjlg9VmHjX8uzDO2sAGwU3tNFFgRtoQcw4KfHDDIVM-m9h4fJajrRREhz0_S",
  },
  {
    year: "2018",
    title: "Introduction to functional programming with TypeScript",
    event: "Dublin TypeScript Meetup",
    slidesId:
      "2PACX-1vRbiSsMiNtgWp2yti-wSl6bUp4kkodcaQ-LzymoxGQ5sHXHAlc3h8KueIxj4RXsBWRVv3KwomfUIdJy",
  },
  {
    year: "2018",
    title: "Exploring TypeScript and its ecosystem",
    event: "DotNet 2018 Madrid",
    slidesId:
      "2PACX-1vSGBOZEMBZlthAVDVCqj9FAR7qvdZmhTwPAZoUQpT2BZxhYOMJYUoOCCm6hrTx3YAlTeKN1VqeidDVK",
  },
  {
    year: "2018",
    title: "Dependency injection in Node.js with InversifyJS & TypeScript v2.0",
    event: "Seattle JS 2018",
    slidesId:
      "2PACX-1vRCVQDCzSDiLliuUSdEs9-FD-mnROvLJ9bN2mQcxejFi7wWnNkTJquc7jyPG5M6fSqgoUvQIUwHcQem",
  },

  {
    year: "2018",
    title: "Introduction to Node.js with TypeScript",
    event: "Node.js Dublin Meetup",
    slidesId:
      "2PACX-1vQPExE1SVeJGwxhLeId6V_oHHxzm5Tn_VIt8N3byDAd1IigPc72rWyohmT8vkMFyMQdE8C43GD69AH1",
  },
  {
    year: "2018",
    title: "Decomposing a PHP monolith",
    event: "Private event",
    slidesId:
      "2PACX-1vTYSjpbrUeGcWWYMvodsyzjxaZlrPG5uh-OIKPZ0u0tmEPuM5qEskbnyYmXB-OUlgQIHk4BBFayGw2v",
  },
  {
    year: "2018",
    title: "How does the TypeScript compiler work?",
    event: "Dublin TypeScript Meetup",
    slidesId:
      "2PACX-1vTTfPCpn_Da9H_AHvTfv0xGVLVYfGxEMTdprbzeJBCqvHu-En-u-4LislBbOs93K5mVQbEAPw6vo96l",
  },
  {
    year: "2017",
    title: "TypeScript mapped types & lookup types",
    event: "Dublin TypeScript Meetup",
    slidesId:
      "2PACX-1vTTzjTQhIbuy9LW6U1eejhoawsDbnJbmVWiQ_VuMDk30lBMdrmjWByOUiq2C9orWfle7Dl3h4JkM12H",
  },
  {
    year: "2017",
    title: "Desarrollo web en 2017",
    event: "Salesianos de Triana Sevilla",
    slidesId:
      "2PACX-1vTkXDJkKLxNw5_PDYhhqgluHC94R4h3NTW1k8KLNIKs1Ca_GwQePOQ0FD-Ju4XYVS-Hm3wRIGwtkZ0-",
  },
  {
    year: "2017",
    title: "Inyección de dependencias en Node.js con InversifyJS & TypeScript",
    event: "Sevilla JS Meetup",
    slidesId:
      "2PACX-1vRO_j72C23G6_901qblZzyvGWNSr-VrAgLBcXbRNK3xJV41efVMqxIhtGviWHAV-M_2Ig54jcvx-Bo6",
  },
  {
    year: "2017",
    title: "Dependency injection in Node.js with InversifyJS & TypeScript",
    event: "Dublin TypeScript Meetup",
    slidesId:
      "2PACX-1vRMKee_JWOvI2ZNwZE8jALiI_qZr_9t36N9eBne9KLRRFzji4w8t8twNtjGO_OEdMUqEkx9TN-QFDJh",
  },
  {
    year: "2017",
    title: "Becoming an open source maintainer: Lessons learned",
    event: "Dublin OSS Meetup",
    slidesId:
      "2PACX-1vRBpdgIhhYHgli3_MEj8nEB2VdadG7tgjANdUGxjbh2jJnXyHm3fvJQEHIf6wghjtXe84AscYZbuH5U",
  },
  {
    year: "2017",
    title: "What's new in TypeScript 2.2 - 2.4?",
    event: "Dublin TypeScript Meetup",
    slidesId:
      "2PACX-1vSJEsvQLmlnh4slcfes20vR4eORkhPidDoSUgJAddK4RsodeFeIQGaOLP3mswcVrhJ_FxHTXsa7x6-n",
  },
  {
    year: "2017",
    title: "Inyección de dependencias en Node.js con InversifyJS & TypeScript",
    event: "Sevilla Node.js Meetup",
    slidesId:
      "2PACX-1vTG5_yL_t6fiBjze_v9E_QJF5x53kLl4zLlzEXR4SBrTQAWM1_e7pk0OlEU-g_iKSMXKqUM_kFh0T0T",
  },
  {
    year: "2016",
    title: "What's new in TypeScript 2.0 - 2.2?",
    event: "Dublin TypeScript Meetup",
    slidesId:
      "2PACX-1vS8Jj00JlQqs4qRU47faDrYErKq3ICyx7ywHJeToNaTg91Fb3DuUgtewylwZsJxHtAzZDcwQ4tpeQ6V",
  },
  {
    year: "2016",
    title: "Building Node Applications with VS Code, InversifyJS & Typescript",
    event: "Dublin TypeScript Meetup",
    slidesId:
      "2PACX-1vQSH7iDyQMuTgKshPruOgen6CykqsxX44vBMCP7sAGybaW5bNIAiynDFuGeuApUgIuOD3ushx-MKHrN",
  },
  {
    year: "2016",
    title: "Building software communities",
    event: "Microsoft MVP Regional Summit (Dublin)",
    slidesId:
      "2PACX-1vQvLB3n_Gdc6ymqbGqGJH3Fw067SvIHZUpK7opvIfeFUKcZ9fBQq9fX2L_EoC-tCbIt4rr50roPkxP4",
  },
  {
    year: "2016",
    title:
      "Introduction to Functional Programming & Reactive Programming with TypeScript",
    event: "Dublin TypeScript Meetup",
    slidesId:
      "2PACX-1vSRsJJbGPDf7woo6e6iqXMqSxMdY1iGxSvxQXEaRbxCQfkGw0Ak_DiDPHVgJu02eeUmBRqe9JsmPa0L",
  },
  {
    year: "2016",
    title: "Functional programing jargon",
    event: "Dublin JavaScript Meetup",
    slidesId:
      "2PACX-1vQSael6lT5G6G06NkBVq0lME6qZSnzdsxUCW0gAZteUAjJ-t6sYOzcwUJvaRnOxysKhZeP-O4PcleMP",
  },
  {
    year: "2016",
    title:
      "Dependency Inversion in large-scale TypeScript applications with InversifyJS",
    event: "Dublin TypeScript Meetup",
    slidesId:
      "2PACX-1vRnM4h5jcto2vezYE2QidEDm1YYEgN0w047aUCupbAPQg79CAuUn9IpxMYTZgqjQ__EDqtjUMmCG1lX",
  },
  {
    year: "2016",
    title: "Introducing TypeScript",
    event: "Dublin TypeScript Meetup",
    slidesId:
      "2PACX-1vRWgFwzYz3o-9xQjKeUsaEyRD-WOfaavUdWcu6tKyz7klznoTdNBcms2S5M9JSdsCqY6xnnmsy3o9vU",
  },
  {
    year: "2016",
    title: "React + Redux + TypeScript === ♥",
    event: "Dublin TypeScript Meetup",
    slidesId:
      "2PACX-1vQwGixdnX_H2pMKcT49grnzcnmN1xfthmKhzVtpdJ8oVoIYF1cuKHzMQyUHsuHTIfnjSMjfS0cGv7Vn",
  },
  {
    year: "2015",
    title: "Decorators & metadata reflection",
    event: "Dublin TypeScript Meetup",
    customUrl: "/legacy_talks/typescript_decorators.html",
    slidesId: "",
  },
  {
    year: "2015",
    title: "Introducing TypeScript",
    event: "Dublin TypeScript Meetup",
    customUrl: "/legacy_talks/introducing_typescript.html",
    slidesId: "",
  },
];

export function Talks() {
  return (
    <Section
      id="talks"
      title="Talks"
      content={
        <div className="row">
          {talkItems.map((item, itemIndex) => {
            const href = item.customUrl
              ? item.customUrl
              : `https://docs.google.com/presentation/d/e/${item.slidesId}/embed`;
            return (
              <div className="col-md-6" key={itemIndex}>
                <ContentCard
                  title1={item.year}
                  title2={item.title}
                  title3={item.event}
                  content={
                    <a
                      href={href}
                      className="btn btn-primary py-3 px-4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Go to slides
                    </a>
                  }
                />
              </div>
            );
          })}
        </div>
      }
    />
  );
}

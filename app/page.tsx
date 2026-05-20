"use client";

import { FormEvent, useState } from "react";

const environmentSlides = [
  {
    src: "/assets/store-reception.png",
    alt: "泡泡爪宠物洗护店接待等候区",
    title: "接待等候区",
    text: "温润木饰面、石材前台和产品陈列区，让主人等候时也能清楚了解护理用品。",
  },
  {
    src: "/assets/store-wash-spa.png",
    alt: "泡泡爪宠物洗护店洗护水疗区",
    title: "洗护水疗区",
    text: "独立洗护位、玻璃隔断和防滑地面，兼顾清洁效率、卫生管理和宠物安全。",
  },
  {
    src: "/assets/store-grooming.png",
    alt: "泡泡爪宠物洗护店造型护理区",
    title: "造型护理区",
    text: "镜前精修工位、整齐工具收纳和独立护理室，适合精细修剪与低压力护理。",
  },
];

const services = [
  {
    src: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=700&q=80",
    alt: "干净可爱的狗狗",
    title: "基础洗澡",
    text: "温和清洁、吹干梳顺、趾甲修剪、耳眼清洁，适合日常护理。",
  },
  {
    src: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=700&q=80",
    alt: "宠物美容后的狗狗",
    title: "精修造型",
    text: "泰迪、比熊、雪纳瑞等常见造型，先沟通脸型和毛长再下剪。",
  },
  {
    src: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=700&q=80",
    alt: "放松的猫咪",
    title: "猫咪护理",
    text: "低压力洗护、浮毛梳理、局部清洁，尽量缩短等待和吹风时间。",
  },
  {
    src: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=700&q=80",
    alt: "小狗特写",
    title: "皮毛养护",
    text: "针对干燥、打结、换毛期和皮屑问题，提供护理浴和深层梳理。",
  },
];

const prices = [
  {
    tag: "日常推荐",
    title: "小型犬基础洗护",
    price: "¥88",
    items: ["沐浴清洁与吹干", "耳眼清洁", "趾甲和脚底毛修剪"],
  },
  {
    tag: "人气套餐",
    title: "洗护加精修造型",
    price: "¥168",
    featured: true,
    items: ["基础洗护全套", "脸部和身体造型修剪", "打结部位细致梳开"],
  },
  {
    tag: "猫咪专享",
    title: "猫咪低压力护理",
    price: "¥128",
    items: ["浮毛梳理和局部清洁", "耳眼与脚垫护理", "安静单独护理位"],
  },
];

const reviews = [
  {
    text: "我家狗很怕吹风，护理师一直边安抚边吹，出来蓬蓬的，耳朵也清理得很干净。",
    name: "柯基“豆包”主人",
    avatar: "林",
  },
  {
    text: "猫咪第一次洗澡没有应激，店里会提前确认状态，结束后还发了护理建议。",
    name: "布偶“糯米”主人",
    avatar: "周",
  },
  {
    text: "价格说得很清楚，没有临时加项。修出来的脸型很自然，拍照特别上镜。",
    name: "泰迪“可乐”主人",
    avatar: "陈",
  },
];

function StoreInfoCard() {
  return (
    <aside className="quick-card" aria-label="门店信息">
      <h2>今日营业中</h2>
      <div className="hours">
        <div>
          <strong>10:00 - 20:30</strong>建议提前 2 小时预约，到店前可先咨询宠物状态。
        </div>
        <div>
          <strong>地址</strong>上海市宜川路街道陕西北路1620号。
        </div>
        <div>
          <strong>新客礼</strong>首次洗护享 8 折，并赠送耳道检查一次。
        </div>
      </div>
      <figure className="store-map">
        <img
          src="/assets/store-map-shaanxi-north-road.png"
          alt="泡泡爪宠物洗护店位于上海市宜川路街道陕西北路1620号的清新风格地图"
        />
        <figcaption>泡泡爪宠物洗护店 · 陕西北路1620号</figcaption>
      </figure>
    </aside>
  );
}

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [formNote, setFormNote] = useState("");

  const showSlide = (index: number) => {
    setActiveSlide((index + environmentSlides.length) % environmentSlides.length);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormNote("已收到预约信息，门店会尽快与您确认时间。");
    event.currentTarget.reset();
  };

  return (
    <>
      <header className="topbar">
        <nav className="nav" aria-label="主导航">
          <a className="brand" href="#home" aria-label="泡泡爪宠物洗护店首页">
            <span className="brand-mark" aria-hidden="true">
              爪
            </span>
            <span>泡泡爪宠物洗护店</span>
          </a>
          <div className="nav-links">
            <a href="#environment">环境</a>
            <a href="#services">服务</a>
            <a href="#care">流程</a>
            <a href="#prices">价格</a>
            <a href="#reviews">口碑</a>
          </div>
          <a className="button" href="#booking">
            立即预约
          </a>
        </nav>
      </header>

      <main>
        <section className="booking" id="booking">
          <div className="container">
            <div className="booking-panel">
              <div>
                <div className="section-kicker">BOOK A VISIT</div>
                <h2>给它约一次舒服的洗护</h2>
                <p>
                  留下信息后，门店会按预约顺序确认档期。急单请直接电话联系，我们会优先看今天还能不能安排。
                </p>
                <div className="contact-list">
                  <div className="contact-item">
                    <strong>电话</strong>138-0000-8899
                  </div>
                  <div className="contact-item">
                    <strong>微信</strong>PaopaoPaws
                  </div>
                  <div className="contact-item">
                    <strong>地址</strong>上海市宜川路街道陕西北路1620号
                  </div>
                  <div className="contact-item">
                    <strong>停车</strong>门口临停 15 分钟，附近有社区停车场。
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <label>
                  联系人
                  <input type="text" name="name" placeholder="例如：王女士" required />
                </label>
                <label>
                  联系电话
                  <input type="tel" name="phone" placeholder="请输入手机号" required />
                </label>
                <label>
                  宠物类型
                  <select name="pet" defaultValue="小型犬">
                    <option>小型犬</option>
                    <option>中大型犬</option>
                    <option>猫咪</option>
                    <option>其他宠物</option>
                  </select>
                </label>
                <label>
                  想预约的服务
                  <select name="service" defaultValue="基础洗护">
                    <option>基础洗护</option>
                    <option>洗护加造型</option>
                    <option>猫咪低压力护理</option>
                    <option>皮毛养护</option>
                  </select>
                </label>
                <label>
                  期望到店时间
                  <input type="datetime-local" name="arrivalTime" required />
                </label>
                <label>
                  备注
                  <textarea
                    name="note"
                    placeholder="可以写宠物年龄、体重、是否怕生或皮肤敏感"
                  />
                </label>
                <button type="submit">提交预约信息</button>
                <p className="form-note" aria-live="polite">
                  {formNote}
                </p>
              </form>
            </div>
          </div>
        </section>

        <section className="hero" id="home">
          <div className="hero-inner">
            <div>
              <span className="eyebrow">温和洗护 · 透明报价 · 猫犬友好</span>
              <h1>把毛孩子洗得香香软软，也照顾好它的小情绪</h1>
              <p className="hero-copy">
                泡泡爪专注宠物洗澡、美容修剪、皮毛养护和幼宠适应洗护。护理师会先评估皮肤、毛结和性格，再安排合适的洗护节奏。
              </p>
              <div className="hero-actions">
                <a className="button" href="#booking">
                  预约今日档期
                </a>
                <a className="button secondary" href="#services">
                  查看服务项目
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="environment" id="environment">
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">STORE ENVIRONMENT</div>
              <h2>高端、干净、让宠物放松的店内环境</h2>
              <p>店内按接待、洗护、水疗和造型分区设计，动线清楚，减少宠物等待和互相干扰。</p>
            </div>

            <div className="env-carousel" aria-label="店内环境轮播图">
              <div
                className="env-track"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {environmentSlides.map((slide) => (
                  <article className="env-slide" key={slide.title}>
                    <img src={slide.src} alt={slide.alt} />
                    <div className="env-caption">
                      <h3>{slide.title}</h3>
                      <p>{slide.text}</p>
                    </div>
                  </article>
                ))}
              </div>

              <button
                className="carousel-control prev"
                type="button"
                aria-label="上一张店内环境图"
                onClick={() => showSlide(activeSlide - 1)}
              >
                ‹
              </button>
              <button
                className="carousel-control next"
                type="button"
                aria-label="下一张店内环境图"
                onClick={() => showSlide(activeSlide + 1)}
              >
                ›
              </button>
              <div className="env-dots" aria-label="选择店内环境图">
                {environmentSlides.map((slide, index) => (
                  <button
                    className={`env-dot${index === activeSlide ? " active" : ""}`}
                    type="button"
                    aria-label={`查看${slide.title}`}
                    key={slide.title}
                    onClick={() => showSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services">
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">OUR SERVICES</div>
              <h2>常用洗护项目</h2>
              <p>从日常清洁到造型护理，每个项目都会根据宠物体型、毛量和敏感程度调整用品与时间。</p>
            </div>

            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <img src={service.src} alt={service.alt} />
                  <div className="service-body">
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="care">
          <div className="container split">
            <div className="feature-photo">
              <img
                src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1000&q=82"
                alt="护理师抱着宠物狗"
              />
            </div>

            <div>
              <div className="section-kicker">GENTLE CARE</div>
              <h2>洗护前先了解宠物，而不是直接开工</h2>
              <p className="text-muted">
                我们会记录宠物过敏史、洗护抗拒点、皮肤状态和毛发打结程度。胆小、年幼或第一次到店的宠物，会安排更安静的位置和更慢的节奏。
              </p>

              <div className="badge-row">
                <div className="badge">
                  <strong>1:1</strong>专人照看
                </div>
                <div className="badge">
                  <strong>消毒</strong>一宠一清洁
                </div>
                <div className="badge">
                  <strong>可沟通</strong>过程可反馈
                </div>
              </div>

              <div className="steps">
                <div className="step">
                  <div className="step-num">01</div>
                  <div>
                    <h3>到店评估</h3>
                    <p>检查皮肤、耳朵、脚垫和毛结，确认是否适合当日洗护。</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-num">02</div>
                  <div>
                    <h3>分区清洁</h3>
                    <p>根据毛发类型选择浴液，避开眼鼻，重点处理脚底和腹部。</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-num">03</div>
                  <div>
                    <h3>吹干复查</h3>
                    <p>吹透底毛后再梳理，离店前反馈护理建议和下次洗护时间。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="prices" id="prices">
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">PRICE MENU</div>
              <h2>清晰好选的价格</h2>
              <p>以下为常规参考价，实际费用会根据体型、毛量、打结程度和宠物配合度微调，到店前可先拍照咨询。</p>
            </div>

            <div className="price-grid">
              {prices.map((price) => (
                <article
                  className={`price-card${price.featured ? " featured" : ""}`}
                  key={price.title}
                >
                  <span className="tag">{price.tag}</span>
                  <h3>{price.title}</h3>
                  <div className="price">
                    {price.price} <small>起</small>
                  </div>
                  <ul>
                    {price.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews">
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">HAPPY PETS</div>
              <h2>来自主人们的反馈</h2>
              <p>好的洗护不只是洗干净，也要让宠物愿意下次再来。</p>
            </div>

            <div className="reviews-grid">
              {reviews.map((review) => (
                <article className="review-card" key={review.name}>
                  <div className="stars" aria-label="五星评价">
                    ★★★★★
                  </div>
                  <p>{review.text}</p>
                  <div className="reviewer">
                    <span className="avatar">{review.avatar}</span> {review.name}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="store-info-section">
          <div className="container">
            <StoreInfoCard />
          </div>
        </section>
      </main>

      <footer className="footer">© 2026 泡泡爪宠物洗护店 · 让每一次洗澡都更安心</footer>
    </>
  );
}

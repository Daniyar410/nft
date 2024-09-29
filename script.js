const btn = document.querySelector("#open-btn");
const modal_close = document.querySelector("#unactive");
const body = document.querySelector("body");
const modal = document.querySelector("#modal");

btn.onclick = () => {
  modal.classList.add("active");
  body.classList.add("scroll");
};

modal_close.onclick = () => {
  modal.classList.remove("active");
  body.classList.remove("scroll");
};

document
  .getElementById("telegramForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const token = "7468903894:AAHQyBppSQtHNdyEYIsscNZs01X7d6fEVDI"; // Замените на ваш токен
    const chat_id = "-4574918556"; // Замените на ваш chat_id
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    // Формируем сообщение
    const message = `Name: ${name}\nPhone: ${phone}`;

    const data = {
      chat_id: chat_id,
      text: message,
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          //   alert('Message sent!');

          setTimeout(() => {
            location.reload();
          }, 3000);
          const thanks = document.querySelector("#thanks");
          thanks.innerText = "спасибо";
        } else {
          alert("Error sending message.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error sending message.");
      });
  });

const catalog = [
  {
    img: "./img/Rectangle11.png",
    text: "3D Soft Curves",
    avatar: "./img/emotion.jpg",
    comment: "Esther Howard",
    name: "Current Bid",
    price: "0.85 ETH",
  },
  {
    img: "./img/CARD1.png",
    text: "3D Soft Curves",
    avatar: "./img/emotion.jpg",
    comment: "Esther Howard",
    name: "Current Bid",
    price: "0.85 ETH",
  },
  {
    img: "./img/Rectangle11.png",
    text: "3D Soft Curves",
    avatar: "./img/emotion.jpg",
    comment: "Esther Howard",
    name: "Current Bid",
    price: "0.85 ETH",
  },
  {
    img: "./img/CARD5.png",
    text: "3D Soft Curves",
    avatar: "./img/emotion.jpg",
    comment: "Esther Howard",
    name: "Current Bid",
    price: "0.85 ETH",
  },

  {
    img: "./img/CARD1.png",
    text: "3D Soft Curves",
    avatar: "./img/emotion.jpg",
    comment: "Esther Howard",
    name: "Current Bid",
    price: "0.85 ETH",
  },

  {
    img: "./img/Rectangle11.png",
    text: "3D Soft Curves",
    avatar: "./img/emotion.jpg",
    comment: "Esther Howard",
    name: "Current Bid",
    price: "0.85 ETH",
  },
  {
    img: "./img/CARD2.png",
    text: "3D Soft Curves",
    avatar: "./img/emotion.jpg",
    comment: "Esther Howard",
    name: "Current Bid",
    price: "0.85 ETH",
  },
  {
    img: "./img/Rectangle11.png",
    text: "3D Soft Curves",
    avatar: "./img/emotion.jpg",
    comment: "Esther Howard",
    name: "Current Bid",
    price: "0.85 ETH",
  },
  {
    img: "./img/CARD2.png",
    text: "3D Soft Curves",
    avatar: "./img/emotion.jpg",
    comment: "Esther Howard",
    name: "Current Bid",
    price: "0.85 ETH",
  },
  {
    img: "./img/card4.png",
    text: "3D Soft Curves",
    avatar: "./img/emotion.jpg",
    comment: "Esther Howard",
    name: "Current Bid",
    price: "0.85 ETH",
  },
  {
    img: "./img/Rectangle11.png",
    text: "3D Soft Curves",
    avatar: "./img/emotion.jpg",
    comment: "Esther Howard",
    name: "Current Bid",
    price: "0.85 ETH",
  },
  {
    img: "./img/Rectangle11.png",
    text: "3D Soft Curves",
    avatar: "./img/emotion.jpg",
    comment: "Esther Howard",
    name: "Current Bid",
    price: "0.85 ETH",
  },
];

const wrap = document.querySelector(".wrap1");

const cards = catalog.map((card) => {
  
    return `
     <div class="card2">
              <img src=${card.img} alt="" />
  
              <div class="text">
                <h1>${card.text}</h1>
  
                <div class="div">
                  <div class="commet2">
                    <img src=${card.avatar} alt="" />
                    <p>${card.comment}</p>
                  </div>
                  <div class="buy">
                    <p>${card.name}</p>
                    <h1>${card.price}</h1>
                  </div>
                </div>
              </div>
            </div>

            
  `;
  }).join("");


wrap.innerHTML = cards;

const catalogB = [
  {
    incon: "./img/card6.png",
    avatarB: "./img/emotion2.jpg",
    titelA: "Tung Tran",
    titelB: "Bad Artist, NFT  Enthusiast, <br> Metaverse Innovator  Supporting #bitcoin since 2012",
    click: "Follow",
    follow: "3K Followers",
  },
  {
    incon: "./img/card7.png",
    avatarB: "./img/emotion2.jpg",
    titelA: "Wade Warren",
    titelB: "Bad Artist, NFT  Enthusiast, <br> Metaverse Innovator  Supporting #bitcoin since 2012",
    click: "Follow",
    follow: "8k Followers",
  },
  {
    incon: "./img/card8.png",
    avatarB: "./img/emotion4.png",
    titelA: "Arlene McCoy",
    titelB: "Bad Artist, NFT  Enthusiast, <br> Metaverse Innovator  Supporting #bitcoin since 2012",
    click: "Follow",
    follow: "650 Followers",
  },
  {
    incon: "./img/card9.png",
    avatarB: "./img/emotion6.png",
    titelA: "Dianne Russell",
    titelB: "Bad Artist, NFT  Enthusiast, <br> Metaverse Innovator  Supporting #bitcoin since 2012",
    click: "Follow",
    follow: "1K Followers",
  },
  {
    incon: "./img/card6.png",
    avatarB: "./img/emotion3.png",
    titelA: "Savannah Nguyen",
    titelB: "Bad Artist, NFT  Enthusiast, <br> Metaverse Innovator  Supporting #bitcoin since 2012",
    click: "Follow",
    follow: "238 Followers",
  },
  {
    incon: "./img/card7.png",
    avatarB: "./img/emotion3.png",
    titelA: "Jenny Wilson",
    titelB: "Bad Artist, NFT  Enthusiast, <br> Metaverse Innovator  Supporting #bitcoin since 2012",
    click: "Follow",
    follow: "64 Followers",
  },
  {
    incon: "./img/card8.png",
    avatarB: "./img/emotion4.png",
    titelA: "Brooklyn Simmons",
    titelB: "Bad Artist, NFT  Enthusiast, <br> Metaverse Innovator  Supporting #bitcoin since 2012",
    click: "Follow",
    follow: "2K Followers",
  },
  {
    incon: "./img/card9.png",
    avatarB: "./img/emotion2.jpg",
    titelA: "Theresa Webb",
    titelB: "Bad Artist, NFT  Enthusiast, <br> Metaverse Innovator  Supporting #bitcoin since 2012",
    click: "Follow",
    follow: "127 Followers",
  },
];


const wrapB = document.querySelector('.wrap2')

const cardsB = catalogB.map((cardB) => {

  return `
    <div class="card3">
            <img src=${cardB.incon} alt="">

            <div class="div2">
              <div class="avatar">
                <img src=${cardB.avatarB} alt="">
              </div>
              <div class="titel">
                <h3>${cardB.titelA}</h3>
                <p>${cardB.titelB}</p>

                  <div class="follow">
                    <h3>${cardB.follow}</h3>
                    <button>${cardB.click}</button>
                  </div>
              </div>
            </div>
            
          </div>
  `
}).join("")

wrapB.innerHTML = cardsB
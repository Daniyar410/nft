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
}).join('');

wrap.innerHTML = cards;

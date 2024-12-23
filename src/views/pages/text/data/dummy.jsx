export const ExplanationData = [
  {
    heading: "1. Model Explaniblity",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea quis veritatis ab sit molestiae vitae asperiores ducimus? Corporis cum iste accusantium ullam, cumque omnis aliquam at, perspiciatis dignissimos iure dolorem veritatis odio soluta voluptatibus explicabo nobis sequi quibusdam a dolorum placeat quae quaerat illo tempora? Dignissimos perferendis laborum esse facere.",
    img: "https://cdn-media.huggingface.co/marketing/inference-endpoints-page/select-your-model-3.png",
  },
  {
    heading: "2. Performance Testaing",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis vero quos maxime repellat ullam incidunt debiti dolorum veniam fugit ab. (e.g. Europe, North America or Asia  Pacific).",
    img: "https://cdn-media.huggingface.co/marketing/inference-endpoints-page/choose-your-cloud-3.png",
  },
  {
    heading: "3. Black Box Testaing",
    paragraph: (
      <div>
        <span className="mb-6">
          <p className="mb-6">
            <b>Protected Endpoints</b> are accessible from the Internet and
            require valid authentication.
          </p>
          <p className="mb-6">
            <b>Public Endpoints</b> are accessible from the Internet and do not
            require authentication.
          </p>
          <p>
            <b>Private Endpoints</b> are only available through an intra-region
            secured AWS or Azure PrivateLink direct connection to a VPC and are
            not accessible from the Internet.
          </p>
        </span>
      </div>
    ),
    img: "https://cdn-media.huggingface.co/marketing/inference-endpoints-page/select-your-security-level-3.png",
  },
  {
    heading: "4. Global Explainablity",
    paragraph:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero iure dignissimos, soluta impedit ut, repellendus voluptates nam dolorem maxime magnam sint facere aut voluptatem similique quasi quas ex aliquid ea delectus deserunt dolor perferendis consequuntur, voluptate voluptatum. Illo quidem assumenda dolorem maxime nemo, minus dolore eaque quia illum accusantium perferendis exercitationem molestiae asperiores minima eligendi ex iure placeat quas recusandae porro voluptates. Provident delectus? Ullam laborum eos ducimus ipsa dicta?",
    img: "https://cdn-media.huggingface.co/marketing/inference-endpoints-page/create-and-manage-your-endpoint-3.png",
  },
];

export const instructionsData = [
  {
    id: "01",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, cupiditate. Commodi deleniti maxime unde at deserunt tempore iure non quam,  ",
  },
  {
    id: "02",
    paragraph:
      "sapiente corrupti impedit. Alias est corporis quibusdam quasi blanditiis natus similique dolorum repellat reiciendis",
  },
  {
    id: "03",
    paragraph:
      "sapiente corrupti impedit. Alias est corporis quibusdam quasi blanditiis natus similique dolorum repellat reiciendisr",
  },
];

export const featuresData = [
  {
    title: "Test models with just a few clicks",
    paragraph:
      "Improve your models into next level, without having to deal with infrastructure or MLOps.",
    svg: (
      <svg width="62" height="62" viewBox="0 0 62 62" fill="none">
        <path
          d="M17.0735 23.4856C16.2334 20.5763 19.2978 18.0507 22.1199 19.3271L50.0392 31.9289C53.042 33.2844 52.7751 37.5079 49.6266 38.5001L39.523 41.6721C38.436 42.0121 37.5408 42.7677 37.0352 43.7598L32.258 53.1932C30.7838 56.1079 26.3794 55.7125 25.4767 52.5863L17.0742 23.4882L17.0735 23.4856Z"
          fill="#FF3270"
        ></path>
        <path
          d="M0.748256 24.394C0.478849 24.8589 0.410799 25.4084 0.559075 25.9219C0.707351 26.4354 1.05981 26.8707 1.53891 27.1321C2.01801 27.3935 2.58451 27.4595 3.11378 27.3156L9.76588 25.5076C10.2952 25.3638 10.7438 25.0218 11.0133 24.557C11.2827 24.0922 11.3507 23.5426 11.2024 23.0292C11.0542 22.5157 10.7017 22.0804 10.2226 21.819C9.7435 21.5576 9.17701 21.4916 8.64773 21.6355L1.99563 23.4434C1.46636 23.5873 1.01766 23.9292 0.748256 24.394Z"
          fill="#FFACC5"
        ></path>
        <path
          d="M15.0629 3.79924C14.5838 3.53787 14.0173 3.47185 13.488 3.61571C12.9587 3.75956 12.51 4.1015 12.2406 4.56631C11.9712 5.03111 11.9032 5.58071 12.0514 6.0942L13.915 12.5478C14.0633 13.0613 14.4158 13.4966 14.8949 13.758C15.374 14.0194 15.9405 14.0854 16.4697 13.9415C16.999 13.7977 17.4477 13.4557 17.7171 12.9909C17.9865 12.5261 18.0546 11.9765 17.9063 11.463L16.0427 5.0094C15.8944 4.49592 15.542 4.06061 15.0629 3.79924Z"
          fill="#FFACC5"
        ></path>
        <path
          d="M3.48442 11.2085C2.95558 11.3523 2.50716 11.6938 2.23768 12.158C1.96879 12.6226 1.90098 13.1718 2.04913 13.6848C2.19729 14.1979 2.5493 14.6329 3.02784 14.8944L8.98882 18.1464C9.22645 18.2869 9.49082 18.3796 9.76617 18.4189C10.0415 18.4582 10.3222 18.4433 10.5915 18.375C10.8608 18.3068 11.1131 18.1866 11.3335 18.0217C11.5539 17.8568 11.7377 17.6505 11.8742 17.4151C12.0106 17.1798 12.0967 16.9202 12.1275 16.6518C12.1582 16.3835 12.133 16.1119 12.0532 15.8532C11.9734 15.5945 11.8407 15.3541 11.663 15.1462C11.4854 14.9384 11.2664 14.7674 11.0191 14.6434L5.05817 11.3915C4.57929 11.1306 4.01327 11.0648 3.48442 11.2085Z"
          fill="#FFACC5"
        ></path>
        <path
          d="M28.654 6.45386C28.5059 5.94079 28.1539 5.50576 27.6753 5.24431C27.1964 4.98344 26.6304 4.91765 26.1016 5.06139C25.5727 5.20512 25.1243 5.54663 24.8548 6.01089L21.5029 11.794C21.358 12.0246 21.2624 12.2811 21.2219 12.5482C21.1814 12.8153 21.1968 13.0877 21.2672 13.3489C21.3375 13.6101 21.4614 13.855 21.6314 14.0688C21.8013 14.2826 22.014 14.461 22.2566 14.5933C22.4991 14.7256 22.7667 14.8092 23.0433 14.8391C23.3199 14.8689 23.5999 14.8444 23.8665 14.767C24.1332 14.6895 24.381 14.5608 24.5952 14.3885C24.8095 14.2161 24.9857 14.0037 25.1135 13.7638L28.4655 7.98066C28.7344 7.51606 28.8022 6.96692 28.654 6.45386Z"
          fill="#FFACC5"
        ></path>
      </svg>
    ),
  },
  {
    title: "Keep your costs down",
    paragraph:
      "Leverage a fully-managed solution for inference and just pay as you go for it.",
    svg: (
      <svg width="37" height="62" viewBox="0 0 37 62" fill="none">
        <path
          d="M23.5609 0.638582L7.6364 3.67182C6.86482 3.81879 6.25843 4.41726 6.10133 5.18684L0.474383 32.7519C0.229333 33.9523 1.14662 35.0758 2.37181 35.0758H10.8501C12.04 35.0758 12.9485 36.1388 12.763 37.3142L9.37165 58.8068C9.26637 59.474 10.1269 59.8343 10.5284 59.2911L34.2902 27.1389C35.2846 25.7934 34.2198 23.9051 32.5539 24.0597L20.6646 25.163C19.2486 25.2944 18.1787 23.9058 18.6667 22.5701L25.7422 3.20555C26.2582 1.79323 25.038 0.357232 23.5609 0.638582Z"
          fill="#B226CC"
        ></path>
      </svg>
    ),
  },
  {
    title: "Enterprise Security",
    paragraph: "Don't worry about datas we securly test and notify you.",
    svg: (
      <svg width="55" height="62" viewBox="0 0 55 62" fill="none">
        <path
          d="M24.5971 56C15.6392 56 0.948861 27.178 0.0438895 6.66213C-0.00835901 5.47765 0.691755 4.3956 1.79694 3.96631C14.8472 -1.10289 34.6287 -1.52694 47.4969 3.93774C48.55 4.38497 49.2011 5.43668 49.1613 6.58014C48.3734 29.2383 33.5941 56 24.5971 56Z"
          fill="#A7EFFF"
        ></path>
        <path
          d="M49.1614 6.58014C48.3735 29.2383 33.5942 56 24.5972 56V0.00272953C32.8211 -0.0668375 41.0302 1.192 47.495 3.9369C48.5481 4.38406 49.2012 5.43668 49.1614 6.58014Z"
          fill="#76C5FF"
        ></path>
      </svg>
    ),
  },
];

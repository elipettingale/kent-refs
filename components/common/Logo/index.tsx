export default function Logo(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: 2,
      }}
      viewBox="0 0 300 138"
      {...props}
    >
      <path
        d="M2433 1340c-31-18-32-22-27-64 7-48-3-62-86-125-59-44-24-94 52-74 79 21 65-2-37-61-30-17-30-17-110 28-92 53-126 57-200 22-63-30-108-76-103-107 5-37 26-34 66 10 20 22 56 47 78 55l42 14 38-41c22-23 52-56 68-74l29-32-59-16c-81-23-104-50-104-122 0-31 5-73 12-95 15-52 79-124 101-115 23 9 21 28-7 69-33 50-49 104-42 144l7 34 62-4c61-4 63-5 99-53 42-54 46-71 21-80-30-10-53-35-53-56 0-11 14-42 30-69 17-26 30-55 30-62 0-8-15-24-34-35-18-12-54-43-80-71-46-50-58-86-36-120 7-12 12-12 29 4 12 11 21 27 21 37 0 27 105 117 153 130 55 16 76 35 69 61-4 17-2 20 12 15 10-4 19-7 21-7s11-16 20-35 43-64 75-100c34-38 60-77 62-94 8-55-7-140-31-171-26-36-24-65 4-65 15 0 29 18 53 66 33 65 34 72 37 205 5 198 13 244 41 254 12 5 27 17 32 27 16 28 26 8 13-28-18-51-13-110 12-150 58-96 79-121 89-111 29 29 40 153 23 267-5 37-3 58 9 80 50 95-31 219-114 175-23-12-40-61-40-115 0-40-21-75-46-75-23 0-154 157-154 183 0 23 28 35 70 30 33-5 40-2 59 26 27 37 46 183 37 279-5 62-7 66-58 113-29 26-64 59-78 72-50 48-125 59-177 27Zm93-15c4-9 19-15 35-15 22 0 32-6 39-25 6-15 17-25 30-25 24 0 38-26 22-42-8-8-24 0-57 31-25 23-58 44-74 47-35 7-51 44-20 44 11 0 22-7 25-15Zm-60-6c3-6 0-17-8-25-13-13-16-13-28 1s-11 18 1 26c19 12 26 11 35-2Zm73-43c15-8 45-34 65-57 37-40 38-44 34-103-3-45-11-71-30-99-35-52-89-87-132-87-19 0-38-4-41-10-14-23 72-9 122 20 41 24 57 40 78 85 23 46 27 65 23 115-4 52-2 61 15 66 11 3 26-1 38-12 20-18 20-18-3-27l-23-9 23-15c29-20 31-57 2-48-11 3-20 2-20-3s9-17 20-27 20-29 20-42v-23l-21 21c-31 31-32 18-3-35 17-30 23-53 18-64-6-15-8-15-12 3-5 26-31 55-49 55-10 0-7-9 11-31 30-35 33-65 10-97-20-29-34-28-34 2 0 14-5 28-10 31-6 4-8 15-5 26 9 28-17 24-49-7-14-15-31-45-38-68-6-22-18-49-26-58-20-24-77-23-118 2-27 17-53 22-148 24l-115 4-11-34c-19-57-5-107 52-186 7-9 9-21 4-25-11-11-63 54-77 97-18 52-17 146 1 165 27 26 155 56 211 49 34-5 49-3 49 5 0 6-13 11-30 11-36 0-38 12-7 33 22 16 22 16 1 16-12 1-29-9-38-21-16-23-16-23-10 7l5 30-38-44-69 70c-50 51-75 69-95 69-30 0-93-39-126-79-21-25-22-25-23-4 0 23 42 63 94 90 57 29 103 22 187-30 42-26 80-47 84-47 3 0 37 19 73 43 37 23 86 48 109 55 57 17 73 36 73 83 0 31-7 47-29 70-29 28-51 37-51 21 0-5 13-21 29-36 39-37 43-60 18-92-17-22-26-25-54-21-18 3-55-1-81-8-59-18-60-18-36 1 20 16 13 16-31-2-10-4-15 0-15 15 0 13 14 30 39 46 22 13 54 45 71 69 46 67 69 77 119 52Zm86-386c7-11-47-70-65-70-12 0 2 33 28 63 17 19 28 22 37 7Zm-293-125c6-14 15-25 20-25 11 0 10 17-2 25-5 3-10 10-10 15s25-2 55-16c67-29 108-31 135-4 26 26 34 25 48-4 6-13 38-53 71-89 57-60 61-68 61-113 0-35-7-58-26-86-35-50-37-106-5-149 21-28 23-39 19-108-4-57-12-89-33-129-15-28-34-52-41-52-16 0-19 16-4 25 28 17 50 86 50 155v70l-54 59c-88 96-117 173-86 231 9 17 8 20-10 20-12 0-46 24-77 53-51 48-55 50-49 25 3-16 4-28 2-28-7 0-84 114-92 135-10 26 16 17 28-10Zm577-1c26-33 28-99 5-148-16-32-16-39-1-98l16-63-24 28c-13 15-22 34-19 42 4 8 1 15-5 15s-11-2-11-4-2-11-5-18c-3-8 8-32 25-53 33-41 39-88 17-139-10-23-15-26-24-15-15 19-33 111-27 136 3 11 0 24-7 28-9 6-11-6-6-53 3-34 3-62 1-62-9 0-44 91-43 112 1 49 35 123 62 136 28 13 35 44 18 70-15 25-46 8-68-38-32-62-62-95-75-82-8 8-2 19 19 39 24 23 31 39 37 89 3 33 13 70 22 82 22 31 67 29 93-4Zm-39-113c0-11-13-29-30-41-35-25-38-18-10 28 22 36 40 42 40 13Zm-477-34c40-42 87-101 87-110 0-4-9-3-20 3-30 16-44 3-26-26 9-13 16-26 16-28 0-3-20-11-45-19-50-14-156-100-177-144-13-25-30-33-35-16-7 19 59 93 116 132 67 46 67 44 18 123-33 55-32 77 3 95 34 17 38 17 63-10Zm91-33c9-8 16-25 16-37 0-11-3-17-8-11-4 5-18 21-31 37-20 21-21 27-8 27 8 0 23-7 31-16Zm209-209c4-44 4-48-9-30-15 20-19 67-7 78 9 10 10 8 16-48Z"
        style={{
          fillRule: "nonzero",
        }}
        transform="matrix(.1 0 0 -.1 0 138)"
      />
      <path
        d="M2467 1213c-12-12-7-22 8-17 8 4 15 10 15 15 0 11-14 12-23 2Z"
        style={{
          fillRule: "nonzero",
        }}
        transform="matrix(.1 0 0 -.1 0 138)"
      />
      <path
        d="M.093 0v-.723h.096v.356l.293-.356h.103l-.283.345L.635 0h-.13L.189-.366V0H.093Z"
        style={{
          fill: "#3c527c",
          fillRule: "nonzero",
        }}
        transform="matrix(53.6 0 0 67 7.237 94.173)"
      />
      <path
        d="M.235.018a.722.722 0 0 1-.186-.032v-.101a.496.496 0 0 0 .201.056c.04 0 .072-.01.097-.031a.104.104 0 0 0 .037-.084.112.112 0 0 0-.024-.072.331.331 0 0 0-.089-.067l-.05-.028a.456.456 0 0 1-.13-.1.162.162 0 0 1-.038-.108c0-.056.02-.102.06-.138a.225.225 0 0 1 .155-.054c.055 0 .114.01.176.028v.094a.524.524 0 0 0-.171-.045.132.132 0 0 0-.087.028.087.087 0 0 0-.035.072c0 .024.008.045.025.064.017.018.048.04.093.066l.052.029a.464.464 0 0 1 .131.101.181.181 0 0 1 .037.114.185.185 0 0 1-.07.151.281.281 0 0 1-.184.057Z"
        style={{
          fill: "#3c527c",
          fillRule: "nonzero",
        }}
        transform="matrix(53.6 0 0 67 40.942 94.173)"
      />
      <path
        d="M.093 0v-.723h.219c.069 0 .122.016.159.046.037.031.056.075.056.134 0 .096-.049.164-.146.205L.622 0H.496L.291-.306H.195V0H.093Zm.102-.382h.033c.129 0 .193-.051.193-.152 0-.075-.054-.112-.162-.112H.195v.264Z"
        style={{
          fill: "#3c527c",
          fillRule: "nonzero",
        }}
        transform="matrix(53.6 0 0 67 68.524 94.173)"
      />
      <path
        d="M.093 0v-.723h.404v.077H.196v.242h.253v.076H.196V0H.093Z"
        style={{
          fill: "#3c527c",
          fillRule: "nonzero",
        }}
        transform="matrix(53.6 0 0 67 101.13 94.173)"
      />
      <path
        d="M.087-.723H.19v.456c0 .073.013.126.04.159.027.033.07.049.128.049.058 0 .098-.015.122-.046.024-.031.036-.084.036-.158v-.46h.09v.458c0 .099-.02.171-.061.216C.505-.004.44.018.352.018c-.091 0-.157-.023-.2-.07C.109-.098.087-.17.087-.268v-.455Z"
        style={{
          fill: "#3c527c",
          fillRule: "nonzero",
        }}
        transform="matrix(53.6 0 0 67 128.58 94.173)"
      />
      <path
        d="M.093 0v-.723h.219c.069 0 .122.016.159.046.037.031.056.075.056.134 0 .096-.049.164-.146.205L.622 0H.496L.291-.306H.195V0H.093Zm.102-.382h.033c.129 0 .193-.051.193-.152 0-.075-.054-.112-.162-.112H.195v.264Z"
        style={{
          fill: "#3c527c",
          fillRule: "nonzero",
        }}
        transform="matrix(53.6 0 0 67 164.431 94.173)"
      />
    </svg>
  );
}

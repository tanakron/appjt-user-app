export const menuItems = [

    {
        id: 1,
        label: "menuitems.menu.text",
        isTitle: true
    },
    {
        id: 2,
        label: 'menuitems.dashboard.text',
        icon: 'ri-dashboard-line',
        
        link: '/'
    },
    
  
    {
        id: 0,
        label: 'ระบบการจัดการ',
        isTitle: true
    },
    {
        id: 14,
        label: 'menuitems.email.text',
        icon: 'ri-mail-send-line',
        subItems: [
            {
                id: 15,
                label: 'menuitems.email.list.inbox',
                link: ''
            },
            {
                id: 16,
                label: 'menuitems.email.list.reademail',
                link: ''
            }
        ]
    },
    {
        id: 17,
        label: 'KPI',
        icon: 'ri-artboard-2-line',
        link: '/kpiview'
    },
    {
        id: 17,
        label: 'OT',
        icon: 'dripicons-hourglass',
        link: '/otview'
    },
    {
        id: 4,
        label: 'แชทฝ่ายบุคล',
        icon: 'ri-chat-1-line',
        link: ''
    },
   
    {
        id: 19,
        label: 'ระบบพนักงาน',
        isTitle: true
    },
    {
        id: 20,
        label: 'รายการ พนักงาน',
        icon: 'ri-account-circle-line',
        subItems: [
            {
                id: 100,
                label: 'พนักงานโรงงานทั้งหมด',
                link: '/fullview'
            },
            {
                id: 101,
                label: 'พนักงานออฟฟิตทั้งหมด',
                link: ''
            },
            // {
            //     id: 102,
            //     label: 'A โรงงาน_(Document Control)',
            //     link: ''
            // },
            // {
            //     id: 103,
            //     label: 'A โรงงาน_ซ่อมบำรุง (MT)',
            //     link: ''
            // },
            // {
            //     id: 104,
            //     label: 'โรงงาน_Industrial Engineer',
            //     link: ''
            // },
            // {
            //     id: 105,
            //     label: 'โรงงาน_QC ( บรรจุ)',
            //     link: ''
            // },
            // {
            //     id: 106,
            //     label: 'โรงงาน_XRF',
            //     link: ''
            // },
            // {
            //     id: 107,
            //     label: 'โรงงาน_เซ็นเตอร์(Center)',
            //     link: ''
            // },
            // {
            //     id: 108,
            //     label: 'โรงงาน_แต่ง(Filling)',
            //     link: ''
            // },
            // {
            //     id: 109,
            //     label: 'โรงงาน_แต่ง(Filling)_Laser',
            //     link: ''
            // },
            // {
            //     id: 110,
            //     label: 'โรงงาน_แต่ง(Filling)_ยิงแป๊ก',
            //     link: ''
            // },
            // {
            //     id: 111,
            //     label: 'โรงงาน_แผนกขัด(Polishing)',
            //     link: ''
            // },
            // {
            //     id: 112,
            //     label: 'โรงงาน_ซ่อมงาน',
            //     link: ''
            // },
            // {
            //     id: 113,
            //     label: 'โรงงาน_ตัวอย่าง(PD-Sample)',
            //     link: ''
            // },
            // {
            //     id: 114,
            //     label: 'โรงงาน_ธุรการฝ่ายผลิต(Admin)',
            //     link: ''
            // },
            // {
            //     id: 115,
            //     label: 'โรงงาน_บริหารการผลิต',
            //     link: ''
            // },
            // {
            //     id: 116,
            //     label: 'โรงงาน_ผูกลวด(Plating)',
            //     link: ''
            // },
            // {
            //     id: 117,
            //     label: 'โรงงาน_ฝังทั่วไป(Assembling)',
            //     link: ''
            // },
            // {
            //     id: 118,
            //     label: 'โรงงาน_ลงลูกยาง_ยิงแป๊ก',
            //     link: ''
            // },
            // {
            //     id: 119,
            //     label: 'โรงงาน_ล่อนงาน(Tumbling)',
            //     link: ''
            // },
            // {
            //     id: 120,
            //     label: 'โรงงาน2_QC2( บรรจุ)',
            //     link: ''
            // },
            // {
            //     id: 121,
            //     label: 'โรงงาน2_แต่ง2(Filling)',
            //     link: ''
            // },
            // {
            //     id: 122,
            //     label: 'โรงงาน2_แผนกขัด2(Extra)',
            //     link: ''
            // },
            // {
            //     id: 123,
            //     label: 'โรงงาน2_ธุรการฝ่ายผลิตJJ(Admin)',
            //     link: ''
            // },
            // {
            //     id: 124,
            //     label: 'โรงงาน2_ฝังทั่วไป(Assembling)',
            //     link: ''
            // },
            // {
            //     id: 125,
            //     label: 'โรงงาน2_ฝังพลอย2(Setting)',
            //     link: ''
            // },
            // {
            //     id: 126,
            //     label: 'โรงงาน3_QC3( บรรจุ)',
            //     link: ''
            // },
            // {
            //     id: 127,
            //     label: 'โรงงาน3_เจียรหิน/ จัดซื้อพลอย',
            //     link: ''
            // },
            // {
            //     id: 128,
            //     label: 'โรงงาน3_เซ็นเตอร์หล่อ3(CenterCasting)',
            //     link: ''
            // },
            // {
            //     id: 129,
            //     label: 'โรงงาน3_งานปั๊ม3(Stamping)',
            //     link: ''
            // },
            // {
            //     id: 130,
            //     label: 'โรงงาน3_ฉีดเทียน3(Wax/Casting)',
            //     link: ''
            // },
            // {
            //     id: 131,
            //     label: 'โรงงาน3_หล่อ3(Casting)',
            //     link: ''
            // },
        ]
    },
    {
        id: 25,
        label: 'พนักงานใหม่',
        icon: 'ri-profile-line',
        subItems: [
            {
                id: 26,
                label: 'ทดลองงาน',
                link: ''
            },
            {
                id: 27,
                label: 'อนุมัติผ่านทดลองงาน',
                link: ''
            },
            {
                id: 27,
                label: 'บันทึกพนักงานใหม่',
                link: ''
            },
        ]
    },
    {
        id: 36,
        label: 'แจ้งเตือน การลา',
    icon:"ri-alert-line",
    },
  {
    id: 0,
    label: "ระบบการจัดการ",
    isTitle: true,
  },
  {
    id: 14,
    label: "menuitems.email.text",
    icon: "ri-mail-send-line",
    subItems: [
      {
        id: 15,
        label: "menuitems.email.list.inbox",
        link: "",
      },
      {
        id: 16,
        label: "menuitems.email.list.reademail",
        link: "",
      },
    ],
  },
  {
    id: 17,
    label: "KPI",
    icon: "ri-artboard-2-line",
    link: "",
  },
  {
    id: 17,
    label: "OT",
    icon: "dripicons-hourglass",
    link: "",
  },
  {
    id: 4,
    label: "แชทฝ่ายบุคล",
    icon: "ri-chat-1-line",
    link: "",
  },

  {
    id: 19,
    label: "ระบบพนักงาน",
    isTitle: true,
  },
  {
    id: 20,
    label: "รายการ พนักงาน",
    icon: "ri-account-circle-line",
    subItems: [
      {
        id: 100,
        label: "พนักงานโรงงานทั้งหมด",
        link: "/emp_f_all",
      },
      {
        id: 101,
        label: "พนักงานออฟฟิตทั้งหมด",
        link: "",
      },
    ],
  },
  {
    id: 25,
    label: "พนักงานใหม่",
    icon: "ri-profile-line",
    subItems: [
      {
        id: 26,
        label: "ทดลองงาน",
        link: "",
      },
      {
        id: 27,
        label: "อนุมัติผ่านทดลองงาน",
        link: "",
      },
      {
        id: 27,
        label: "บันทึกพนักงานใหม่",
        link: "",
      },
    ],
  },
  {
    id: 36,
    label: "แจ้งเตือน การลา",
    icon: "ri-alert-line",

    subItems: [
      {
        id: 26,
        label: "ลากิจ",
        link: "",
      },
      {
        id: 27,
        label: "ลาป่วย",
        link: "",
      },
      {
        id: 27,
        label: "ลาคลอด",
        link: "",
      },
      {
        id: 27,
        label: "ลาฉุกเฉิน",
        link: "",
      },
    ],
  },
  {
    id: 36,
    label: "อนุมัติการลา",
    icon: "ri-creative-commons-nd-line",

    subItems: [
      {
        id: 26,
        label: "ลากิจ",
        link: "",
      },
      {
        id: 27,
        label: "ลาป่วย",
        link: "",
      },
      {
        id: 27,
        label: "ลาคลอด",
        link: "",
      },
      {
        id: 27,
        label: "ลาฉุกเฉิน",
        link: "",
      },
    ],
  },

  {
    id: 36,
    label: "Work For Home",
    icon: "ri-home-wifi-line",

    subItems: [
      {
        id: 26,
        label: "คำขอ Work For Home",
        link: "",
      },

      {
        id: 27,
        label: "อนุมัติ Work For Home",
        link: "",
      },

      {
        id: 27,
        label: "รายงาน Work For Home",
        link: "",
      },
    ],
  },
  {
    id: 36,
    label: "Daily Report",
    icon: "ri-sticky-note-line",

    subItems: [
      {
        id: 26,
        label: "Work For Home",
        link: "",
      },

      {
        id: 27,
        label: "รายงาน Daily Report",
        link: "",
      },

      {
        id: 27,
        label: "แจ้งกลับ Daily Report",
        link: "",
      },
    ],
  },

  {
    id: 36,
    label: "เวลาเข้าออกงาน",
    icon: "ri-fingerprint-2-line",

    subItems: [
      {
        id: 26,
        label: "เข้างาน",
        link: "",
      },

      {
        id: 27,
        label: "เลิกงาน",
        link: "",
      },

      {
        id: 27,
        label: "นำเข้ารายงาน",
        link: "",
      },
    ],
  },
];

export const verificationMethods = [
  {
    id: 'mobywatel',
    name: 'mObywatel',
    icon: 'Shield',
    logo: '/mobywatel.png',
    estimatedTime: 'Instant verification',
    requiresApp: true,
    checklist: [
      { icon: 'Key', text: 'Prepare your 4-digit PIN' },
      { icon: 'Smartphone', text: 'Install mObywatel App on your smartphone' }
    ]
  },
  {
    id: 'mojeid',
    name: 'mojeID',
    icon: 'IdCard',
    logo: '/mojeld.jpeg',
    estimatedTime: 'Very fast verification',
    checklist: [
      { icon: 'CreditCard', text: 'Prepare your electronic banking login/password information' }
    ]
  },
  {
    id: 'open-banking',
    name: 'Open Banking ID',
    icon: 'Building2',
    estimatedTime: 'Very fast verification',
    checklist: [
      { icon: 'CreditCard', text: 'Prepare your electronic banking login/password' }
    ]
  },
  {
    id: 'corporate-banking',
    name: 'Corporate Banking',
    icon: 'Building',
    estimatedTime: 'Very fast verification',
    checklist: [
      { icon: 'Building2', text: 'Prepare your company electronic banking login/password' }
    ]
  },
  {
    id: 'micro-transfer',
    name: 'ID via micro money transfer',
    icon: 'Coins',
    estimatedTime: '6 min - 24h verification time',
    checklist: [
      { icon: 'CreditCard', text: 'Prepare your electronic banking login/password information' }
    ]
  },
  {
    id: 'photo-id',
    name: 'Photo of an ID',
    icon: 'ScanLine',
    estimatedTime: '1-3 min verification time',
    checklist: [
      { icon: 'Lightbulb', text: 'Prepare good lighting conditions' },
      { icon: 'CreditCard', text: 'Prepare a valid identity document' }
    ]
  },
  {
    id: 'edo-app',
    name: 'eDO App',
    icon: 'Fingerprint',
    logo: '/edoapp.png',
    estimatedTime: 'Very fast verification',
    requiresApp: true,
    checklist: [
      { icon: 'CreditCard', text: 'Prepare your ID issued after 03.2019' },
      { icon: 'Key', text: 'Prepare your 4-digit PIN' },
      { icon: 'Smartphone', text: 'Install eDO App on your smartphone' }
    ]
  },
  {
    id: 'yoti',
    name: 'Yoti',
    icon: 'Search',
    logo: '/yoti.png',
    estimatedTime: 'Very fast verification',
    requiresApp: true,
    checklist: [
      { icon: 'Smartphone', text: 'Install YOTI app on your smartphone' }
    ],
    qrCode: true,
    qrCodeText: 'Show a QR code to scan and download, ask ios or android'
  }
];
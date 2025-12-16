import React, { useState, useEffect } from 'react';
import { Menu, X, Search, BookOpen, Globe, Music, Users, Heart, ChevronRight, Play, Award, MapPin, Volume2, Star, TrendingUp, Calendar, MessageCircle, Share2, Bookmark, Eye, Clock, Zap, Trophy, Mic, ArrowLeft, Check, Home, Palette, Apple, Hash } from 'lucide-react';

const UrhoboEncyclopedia = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [likedItems, setLikedItems] = useState(new Set());
  const [bookmarkedItems, setBookmarkedItems] = useState(new Set());
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [quizAnswer, setQuizAnswer] = useState(null);
  const [showQuizResult, setShowQuizResult] = useState(false);
  const [userPoints, setUserPoints] = useState(0);
  const [streakDays, setStreakDays] = useState(7);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeVocabCategory, setActiveVocabCategory] = useState('greetings');
  const [showLearningModule, setShowLearningModule] = useState(false);
  const [currentLesson, setCurrentLesson] = useState(0);
  const [lessonProgress, setLessonProgress] = useState(0);
  const [showConversationPractice, setShowConversationPractice] = useState(false);
  const [conversationStep, setConversationStep] = useState(0);
  const [userResponse, setUserResponse] = useState('');
  const [conversationFeedback, setConversationFeedback] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [pronunciationScore, setPronunciationScore] = useState(null);
  const [showAITutor, setShowAITutor] = useState(false);
  const [aiMessages, setAiMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isAiThinking, setIsAiThinking] = useState(false);
  const [selectedWord, setSelectedWord] = useState(null);
  const [aiVoiceFeedback, setAiVoiceFeedback] = useState(null);
  const [showProgressDashboard, setShowProgressDashboard] = useState(false);
  const [userLevel, setUserLevel] = useState('Beginner');
  const [completedLessons, setCompletedLessons] = useState([]);
  const [masteredWords, setMasteredWords] = useState([]);
  const [learningStreak, setLearningStreak] = useState(7);
  const [weeklyGoal, setWeeklyGoal] = useState(50);
  const [achievements, setAchievements] = useState([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [customExercise, setCustomExercise] = useState(null);
  const [showGroupSession, setShowGroupSession] = useState(false);
  const [groupParticipants, setGroupParticipants] = useState([
    { name: 'Elohor M.', avatar: '👩🏿', level: 'Advanced', online: true },
    { name: 'Ovie K.', avatar: '👨🏿', level: 'Intermediate', online: true },
    { name: 'Ada O.', avatar: '👩🏿‍🦱', level: 'Beginner', online: true },
    { name: 'John E.', avatar: '👨🏿‍🦱', level: 'Beginner', online: false }
  ]);
  const [offlineMode, setOfflineMode] = useState(false);
  const [downloadedContent, setDownloadedContent] = useState([]);
  const [showTeacherDashboard, setShowTeacherDashboard] = useState(false);
  const [students, setStudents] = useState([
    { name: 'Ada Okoro', avatar: '👩🏿‍🦱', progress: 65, streak: 5, level: 'Beginner', lastActive: '2 hours ago' },
    { name: 'John Eyube', avatar: '👨🏿‍🦱', progress: 45, streak: 3, level: 'Beginner', lastActive: '1 day ago' },
    { name: 'Grace Efe', avatar: '👩🏿', progress: 82, streak: 12, level: 'Intermediate', lastActive: '30 min ago' }
  ]);
  const [showCertification, setShowCertification] = useState(false);
  const [certificationLevel, setCertificationLevel] = useState('beginner');
  const [certificationProgress, setCertificationProgress] = useState(0);
  const [showCulturalContent, setShowCulturalContent] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);
  const [groupMessages, setGroupMessages] = useState([
    { user: 'Elohor M.', message: 'Migwo, me mu Elohor!', time: '2 min ago', score: 95 },
    { user: 'Ovie K.', message: 'Migwo, me mu Ovie. Omagare?', time: '1 min ago', score: 92 }
  ]);
  const [groupInput, setGroupInput] = useState('');
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'achievement', title: 'New Achievement!', message: '🔥 7 Day Streak Unlocked!', time: '5 min ago', read: false },
    { id: 2, type: 'group', title: 'Group Session', message: 'Elohor M. joined the session', time: '10 min ago', read: false },
    { id: 3, type: 'reminder', title: 'Daily Goal', message: "You're 20 points away from your daily goal!", time: '1 hour ago', read: true }
  ]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [show3DArtifact, setShow3DArtifact] = useState(false);
  const [selectedArtifact, setSelectedArtifact] = useState(null);
  const [artifactRotation, setArtifactRotation] = useState(0);
  const [showVideoLibrary, setShowVideoLibrary] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [userSubscription, setUserSubscription] = useState('free'); // free, basic, premium, lifetime
  const [subscriptionExpiry, setSubscriptionExpiry] = useState(null);
  const [showPaywall, setShowPaywall] = useState(false);
  const [paywallFeature, setPaywallFeature] = useState('');
  const [adBlocker, setAdBlocker] = useState(false);
  const [showAd, setShowAd] = useState(false);
  const [adClicks, setAdClicks] = useState(0);
  const [referralCode, setReferralCode] = useState('URH-' + Math.random().toString(36).substr(2, 6).toUpperCase());
  const [affiliateEarnings, setAffiliateEarnings] = useState(0);
  const [showPaymentSetup, setShowPaymentSetup] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('stripe');
  const [bankDetails, setBankDetails] = useState({
    accountName: '',
    accountNumber: '',
    bankName: '',
    routingNumber: '',
    currency: 'NGN' // Nigerian Naira default
  });
  const [payoutHistory, setPayoutHistory] = useState([
    { date: '2025-01-15', amount: 45000, status: 'completed', method: 'Bank Transfer' },
    { date: '2025-01-01', amount: 38500, status: 'completed', method: 'Bank Transfer' },
    { date: '2024-12-15', amount: 42000, status: 'completed', method: 'Bank Transfer' }
  ]);
  const [withdrawalRequest, setWithdrawalRequest] = useState({
    amount: 0,
    method: 'bank_transfer'
  });
  
  const paymentProviders = {
    stripe: {
      name: 'Stripe',
      logo: '💳',
      fees: '2.9% + $0.30 per transaction',
      payout: '2-7 business days',
      countries: 'Nigeria, USA, UK, Canada, Europe',
      minPayout: '$10',
      supports: ['Cards', 'Bank Transfer', 'Mobile Money'],
      setup: 'Connect your bank account to receive automatic payouts',
      nigeriaSupport: true
    },
    paystack: {
      name: 'Paystack',
      logo: '🇳🇬',
      fees: '1.5% + ₦100 (capped at ₦2,000)',
      payout: 'Instant to 24 hours',
      countries: 'Nigeria, Ghana, South Africa, Kenya',
      minPayout: '₦500',
      supports: ['Cards', 'Bank Transfer', 'USSD', 'QR Code'],
      setup: 'Popular in Nigeria - instant settlements',
      nigeriaSupport: true,
      recommended: true
    },
    flutterwave: {
      name: 'Flutterwave',
      logo: '🦋',
      fees: '1.4% per transaction',
      payout: 'Instant to 24 hours',
      countries: 'Nigeria, Ghana, Kenya, Uganda, Tanzania',
      minPayout: '₦1,000',
      supports: ['Cards', 'Bank Transfer', 'Mobile Money', 'USSD'],
      setup: 'African-focused payment solution',
      nigeriaSupport: true
    },
    paypal: {
      name: 'PayPal',
      logo: '💰',
      fees: '3.9% + fixed fee',
      payout: '1-3 business days',
      countries: 'Global (200+ countries)',
      minPayout: '$10',
      supports: ['PayPal Balance', 'Cards', 'Bank Transfer'],
      setup: 'Global solution but limited in Nigeria',
      nigeriaSupport: false
    }
  };

  const nigerianBanks = [
    'Access Bank', 'GTBank', 'First Bank', 'UBA', 'Zenith Bank', 
    'Ecobank', 'Fidelity Bank', 'FCMB', 'Sterling Bank', 'Stanbic IBTC',
    'Union Bank', 'Wema Bank', 'Polaris Bank', 'Keystone Bank', 'Heritage Bank',
    'Kuda Bank', 'VBank', 'Moniepoint', 'Opay', 'PalmPay'
  ];

  const revenueBreakdown = {
    subscriptions: {
      basic: { count: 150, revenue: 4.99 * 150 },
      premium: { count: 85, revenue: 9.99 * 85 },
      lifetime: { count: 12, revenue: 199.99 * 12 }
    },
    ads: {
      impressions: 50000,
      clicks: 1250,
      revenue: (50000 / 1000) * 2.5 + (1250 * 0.25)
    },
    affiliates: {
      referrals: 25,
      revenue: affiliateEarnings
    }
  };

  const totalRevenue = 
    revenueBreakdown.subscriptions.basic.revenue +
    revenueBreakdown.subscriptions.premium.revenue +
    revenueBreakdown.subscriptions.lifetime.revenue +
    revenueBreakdown.ads.revenue +
    revenueBreakdown.affiliates.revenue;

  const handleWithdrawal = () => {
    if (withdrawalRequest.amount < 500) {
      alert('Minimum withdrawal is ₦500');
      return;
    }
    if (withdrawalRequest.amount > totalRevenue) {
      alert('Insufficient balance');
      return;
    }
    
    alert(`✅ Withdrawal request submitted!\n\nAmount: ₦${withdrawalRequest.amount.toLocaleString()}\nMethod: ${withdrawalRequest.method}\nEstimated arrival: 24-48 hours\n\nYou'll receive an email confirmation shortly.`);
    
    setPayoutHistory(prev => [{
      date: new Date().toISOString().split('T')[0],
      amount: withdrawalRequest.amount,
      status: 'pending',
      method: withdrawalRequest.method
    }, ...prev]);
    
    setWithdrawalRequest({ amount: 0, method: 'bank_transfer' });
  };
  
  const subscriptionPlans = {
    free: {
      name: 'Free',
      price: 0,
      period: 'Forever',
      features: [
        '✓ 5 lessons per month',
        '✓ Basic vocabulary (50 words)',
        '✓ 1 story per week',
        '✓ Community forums',
        '✗ AI Tutor (3 questions/day)',
        '✗ Group sessions',
        '✗ Videos',
        '✗ 3D Artifacts',
        '✗ Certification',
        '✗ Offline mode',
        '⚠️ Ads included'
      ],
      color: 'gray'
    },
    basic: {
      name: 'Basic',
      price: 4.99,
      period: 'month',
      features: [
        '✓ Unlimited lessons',
        '✓ Full vocabulary (100+ words)',
        '✓ All stories',
        '✓ AI Tutor (50 questions/day)',
        '✓ 2 group sessions/week',
        '✓ 3 videos/week',
        '✓ Community forums',
        '✗ 3D Artifacts',
        '✗ Certification',
        '✗ Offline mode',
        '⚠️ Limited ads'
      ],
      color: 'blue',
      popular: false
    },
    premium: {
      name: 'Premium',
      price: 9.99,
      period: 'month',
      features: [
        '✓ Everything in Basic',
        '✓ Unlimited AI Tutor',
        '✓ Unlimited group sessions',
        '✓ All videos',
        '✓ All 3D artifacts',
        '✓ Certification program',
        '✓ Offline mode',
        '✓ Priority support',
        '✓ Advanced analytics',
        '✓ Custom learning path',
        '✓ Ad-free experience'
      ],
      color: 'purple',
      popular: true,
      savings: 'Save $30/year'
    },
    lifetime: {
      name: 'Lifetime',
      price: 199.99,
      period: 'one-time',
      features: [
        '✓ All Premium features',
        '✓ Forever access',
        '✓ Future updates free',
        '✓ Early access to new features',
        '✓ Exclusive community',
        '✓ Certificate priority',
        '✓ Family sharing (5 accounts)',
        '✓ Personal AI tutor',
        '✓ Cultural trips discounts',
        '✓ Lifetime guarantee'
      ],
      color: 'gold',
      badge: 'Best Value',
      savings: 'Save $300 over 3 years'
    }
  };

  const adProviders = [
    { name: 'Google AdSense', cpm: 2.5, cpc: 0.25 },
    { name: 'Media.net', cpm: 1.8, cpc: 0.20 },
    { name: 'Amazon Associates', commission: '3-8%' }
  ];

  const affiliateProgram = {
    levels: [
      { referrals: 0, commission: 20, name: 'Bronze' },
      { referrals: 10, commission: 25, name: 'Silver' },
      { referrals: 50, commission: 30, name: 'Gold' },
      { referrals: 100, commission: 35, name: 'Diamond' }
    ]
  };
  
  const artifacts3D = [
    {
      id: 1,
      name: 'Traditional Drum (Ekpere)',
      category: 'Musical Instruments',
      description: 'Sacred drum used in ceremonies and festivals. Made from wood and animal skin.',
      model: '🥁',
      facts: [
        'Used in royal ceremonies',
        'Each rhythm has specific meaning',
        'Passed down through generations',
        'Made by master craftsmen'
      ],
      culturalSignificance: 'The Ekpere drum is central to Urhobo spiritual and social life, communicating with ancestors and marking important events.'
    },
    {
      id: 2,
      name: 'Royal Staff (Ukhure)',
      category: 'Royal Regalia',
      description: 'Symbol of authority carried by traditional rulers and chiefs.',
      model: '🏛️',
      facts: [
        'Made from special wood',
        'Adorned with brass and beads',
        'Represents power and wisdom',
        'Used during important decisions'
      ],
      culturalSignificance: 'The Ukhure represents the connection between the living ruler and ancestral authority.'
    },
    {
      id: 3,
      name: 'Clay Pot (Urhoro)',
      category: 'Household Items',
      description: 'Traditional water storage vessel with intricate designs.',
      model: '🏺',
      facts: [
        'Handcrafted by women',
        'Keeps water cool naturally',
        'Decorated with symbolic patterns',
        'Used in marriage ceremonies'
      ],
      culturalSignificance: 'Clay pots symbolize fertility and abundance in Urhobo culture.'
    },
    {
      id: 4,
      name: 'Traditional Wrapper (Amwa)',
      category: 'Clothing',
      description: 'Colorful fabric worn during ceremonies and daily life.',
      model: '👗',
      facts: [
        'Hand-woven patterns',
        'Colors have meanings',
        'Different styles for occasions',
        'Shows family lineage'
      ],
      culturalSignificance: 'The wrapper is more than clothing - it tells stories of identity, status, and heritage.'
    }
  ];

  const videoLibrary = [
    {
      id: 1,
      title: 'Urhobo Traditional Wedding',
      category: 'Ceremonies',
      duration: '15:30',
      thumbnail: '💍',
      views: '12.5K',
      description: 'Experience a complete traditional Urhobo wedding ceremony with cultural explanations',
      vocabulary: ['Okporho (Bride price)', 'Epha (Custom)', 'Migwo (Greetings)', 'Ovie (King)'],
      difficulty: 'Intermediate'
    },
    {
      id: 2,
      title: 'Cooking Traditional Oghwo Soup',
      category: 'Food & Culture',
      duration: '12:45',
      thumbnail: '🍲',
      views: '8.3K',
      description: 'Learn to cook authentic Urhobo soup with cultural context and language practice',
      vocabulary: ['Oghwo (Soup)', 'Iriapha (Fish)', 'Ovwirhi (Meat)', 'Ame (Water)'],
      difficulty: 'Beginner'
    },
    {
      id: 3,
      title: 'Festival of New Yam (Ighaghe)',
      category: 'Festivals',
      duration: '20:15',
      thumbnail: '🎉',
      views: '15.2K',
      description: 'Witness the vibrant New Yam Festival celebration with traditional dances',
      vocabulary: ['Iyere (Yam)', 'Ighaghe (Festival)', 'Erhi (Spirit)', 'Ọghẹnẹ (God)'],
      difficulty: 'Advanced'
    },
    {
      id: 4,
      title: 'Traditional Music & Dance',
      category: 'Arts',
      duration: '18:00',
      thumbnail: '🎵',
      views: '10.7K',
      description: 'Explore Urhobo musical instruments and traditional dance styles',
      vocabulary: ['Ekpere (Drum)', 'Egwu (Dance)', 'Isha (Song)', 'Ughwrẹ (Music)'],
      difficulty: 'Intermediate'
    },
    {
      id: 5,
      title: 'Elder Speaking About History',
      category: 'Oral History',
      duration: '25:40',
      thumbnail: '👴',
      views: '6.8K',
      description: 'Listen to an elder share stories about Urhobo origins and migrations',
      vocabulary: ['Orere (Town)', 'Koko (Grandmother)', 'Tata (Grandfather)', 'Erhi (Spirit)'],
      difficulty: 'Advanced'
    },
    {
      id: 6,
      title: 'Daily Greetings & Conversations',
      category: 'Language Learning',
      duration: '8:20',
      thumbnail: '👋',
      views: '18.9K',
      description: 'Master common greetings and everyday conversations',
      vocabulary: ['Migwo (Greetings)', 'Omagare (How are you)', 'Orhurhu (Thank you)'],
      difficulty: 'Beginner'
    }
  ];
  
  const culturalStories = [
    {
      id: 1,
      title: 'The Legend of Aziza',
      category: 'Folklore',
      duration: '8 min',
      difficulty: 'Intermediate',
      thumbnail: '📚',
      description: 'A traditional story about the forest spirits who protect and guide the Urhobo people',
      content: 'Long ago, in the deep forests of Urhoboland, there lived mystical beings called Aziza...',
      vocabulary: ['Aziza (Forest spirit)', 'Oghene (God)', 'Orere (Town)', 'Erhi (Spirit)'],
      quiz: [
        { question: 'What are Aziza?', options: ['Forest spirits', 'Warriors', 'Kings', 'Rivers'], correct: 0 }
      ]
    },
    {
      id: 2,
      title: 'Traditional Wedding Ceremony',
      category: 'Culture',
      duration: '12 min',
      difficulty: 'Advanced',
      thumbnail: '💍',
      description: 'Learn about the beautiful traditions of Urhobo marriage ceremonies',
      content: 'The Urhobo wedding is a celebration of families, culture, and love...',
      vocabulary: ['Okporho (Bride price)', 'Epha (Custom)', 'Migwo (Greetings)'],
      quiz: [
        { question: 'What is Okporho?', options: ['Wedding', 'Bride price', 'Dance', 'Food'], correct: 1 }
      ]
    },
    {
      id: 3,
      title: 'Festival of New Yam',
      category: 'Festivals',
      duration: '10 min',
      difficulty: 'Beginner',
      thumbnail: '🎉',
      description: 'Discover the significance of the yam festival in Urhobo culture',
      content: 'The New Yam Festival marks the harvest season and is a time of thanksgiving...',
      vocabulary: ['Iyere (Yam)', 'Ughelli (Festival)', 'Oghwo (Soup)'],
      quiz: [
        { question: 'What does Iyere mean?', options: ['Festival', 'Dance', 'Yam', 'Harvest'], correct: 2 }
      ]
    }
  ];

  const certificationRequirements = {
    beginner: {
      name: 'Urhobo Language Beginner Certificate',
      requirements: [
        '✓ Master 50 vocabulary words',
        '✓ Complete 3 basic lessons',
        '✓ Pass pronunciation test (70%+)',
        '✓ Achieve 7-day learning streak',
        '✓ Score 80%+ on final exam'
      ],
      exam: {
        questions: 20,
        passingScore: 80,
        duration: '30 min'
      }
    },
    intermediate: {
      name: 'Urhobo Language Intermediate Certificate',
      requirements: [
        '✓ Master 150 vocabulary words',
        '✓ Complete all 6 lessons',
        '✓ Pass pronunciation test (85%+)',
        '✓ Participate in 3 group sessions',
        '✓ Score 85%+ on final exam'
      ],
      exam: {
        questions: 30,
        passingScore: 85,
        duration: '45 min'
      }
    },
    advanced: {
      name: 'Urhobo Language Advanced Certificate',
      requirements: [
        '✓ Master 300+ vocabulary words',
        '✓ Complete all advanced modules',
        '✓ Pass pronunciation test (95%+)',
        '✓ Lead 1 group session',
        '✓ Submit cultural essay',
        '✓ Score 90%+ on final exam'
      ],
      exam: {
        questions: 50,
        passingScore: 90,
        duration: '60 min'
      }
    }
  };

  const wordsOfDay = [
    { word: 'Migwo', translation: "I'm on my knees (Greetings)", pronunciation: 'mee-gwoh', example: 'Migwo!' },
    { word: 'Orere', translation: 'Town', pronunciation: 'oh-reh-reh', example: 'Orere me!' },
    { word: 'Ufuoma', translation: 'Peace', pronunciation: 'oo-fwoh-mah', example: 'Ufuoma re o!' },
    { word: 'Orhurhu', translation: 'Thank you', pronunciation: 'or-roo-roo', example: 'Orhurhu vwe!' },
    { word: 'Vrendo', translation: 'Stand up and thank you', pronunciation: 'vren-doh', example: 'Vrendo!' },
    { word: 'Omagare?', translation: 'How are you?', pronunciation: 'oh-mah-gah-reh', example: 'Omagare?' },
    { word: 'Omamegare', translation: 'I am fine', pronunciation: 'oh-mah-meh-gah-reh', example: 'Omamegare!' },
    { word: 'Omamurhioke', translation: 'Good morning', pronunciation: 'oh-mah-moo-ree-oh-keh', example: 'Omamurhioke!' },
    { word: 'Omamughoruvo', translation: 'Good afternoon', pronunciation: 'oh-mah-moo-goh-roo-voh', example: 'Omamughoruvo!' },
    { word: 'Omamuvovo', translation: 'Good evening', pronunciation: 'oh-mah-moo-voh-voh', example: 'Omamuvovo!' },
    { word: 'Tode', translation: 'Good night', pronunciation: 'toh-deh', example: 'Tode!' }
  ];

  const vocabularyCategories = {
    months: {
      name: 'Months of the Year',
      icon: '📅',
      color: 'cyan',
      words: [
        { urhobo: 'Ọvo', english: 'January - When eyes first open to see the new year', pronunciation: 'oh-voh', example: 'Ejẹ avware diẹ ẹwẹ ọvo uwevwi na' },
        { urhobo: 'Ivẹ', english: 'February - When we prepare and gather for the year', pronunciation: 'ee-veh', example: 'Avwu kẹ cha vwọ kẹ omo ma ro hwo uwevwi na' },
        { urhobo: 'Erha', english: 'March - When we plant for the year', pronunciation: 'er-ha', example: 'Eyi vwaro uwevwi naa' },
        { urhobo: 'Ẹne', english: 'April - When weeds are cleared from farms', pronunciation: 'eh-neh', example: 'Atota rẹ egagọ uwevwi naa' },
        { urhobo: 'Iyori', english: 'May - When yams begin to climb the stakes', pronunciation: 'ee-yoh-ree', example: 'Aguọnẹ ota rẹ oseghe yẹrẹ isiesi ri ibọluu' },
        { urhobo: 'Esa', english: 'June - The Urhobo person eats new yams', pronunciation: 'eh-sah', example: 'Urhobo ọvo ọye ajẹ, ọye eji vwo siẹ yotọ uwevwi na' },
        { urhobo: 'Ighwrẹ', english: 'July - Plenty of new yams, festivals begin', pronunciation: 'ee-gwreh', example: 'Ẹdijana rode ọvo ọye vwo hwo rine' },
        { urhobo: 'Ẹrhẹre', english: 'August - Time of celebrations and festivals', pronunciation: 'er-heh-reh', example: 'Ọshare vẹ aye jọse uwevwi naa' },
        { urhobo: 'Irhiri', english: 'September - You choose which crop to harvest next', pronunciation: 'ee-ree-ree', example: 'Wo de che urhi r\'uwevwi na abọ erha' },
        { urhobo: 'Ihwe', english: 'October - You must work hard to harvest everything', pronunciation: 'ee-weh', example: 'Wọ da diẹ ohwo ọtotaa, jẹ wọje kpaha wiẹ' },
        { urhobo: 'Ihwọ\'vo', english: 'November - Time to sell your farm produce', pronunciation: 'ee-woh-voh', example: 'Afuẹrẹ ohwo taye ake reyọ vwiẹ uwevwi na' },
        { urhobo: 'Ihwi\'vẹ', english: 'December - Month of giving, sharing with family and community', pronunciation: 'ee-wee-veh', example: 'Ihwo reke rukẹ evu rẹ uwevwi na, ọvo ọsẹ yẹrẹ oni' }
      ]
    },
    vowels: {
      name: 'Vowels & Pronunciation',
      icon: '🔤',
      color: 'pink',
      words: [
        { urhobo: 'A', english: 'Ah (as in Hat, Mat, Cat)', pronunciation: 'ah', example: 'Ame (Water), Amwa (Wrapper)' },
        { urhobo: 'E', english: 'EI (as in Eight, Mate, Late)', pronunciation: 'ei', example: 'Erhi (Spirit), Eni (Elephant)' },
        { urhobo: 'Ẹ', english: 'Air (as in Egg, Earn, End)', pronunciation: 'air', example: 'Ẹvwe (Kola), Ẹvwé (Goat)' },
        { urhobo: 'I', english: 'Ee (as in Pit, Sit, Hit, In)', pronunciation: 'ee', example: 'Isio (Stars), Irosu (Rice)' },
        { urhobo: 'O', english: 'Oh (as in Okay, Onos, Open)', pronunciation: 'oh', example: 'Oni (Mother), Oghwo (Soup)' },
        { urhobo: 'Ọ', english: 'Or (as in Orange, Organ, Onions)', pronunciation: 'or', example: 'Ọsẹ (Father), Ọghẹnẹ (God)' },
        { urhobo: 'U', english: 'Uu (as in Put, Cook, Pool)', pronunciation: 'uu', example: 'Usi (Water), Urhu (Person)' }
      ]
    },
    greetings: {
      name: 'Greetings & Phrases',
      icon: '👋',
      color: 'orange',
      words: [
        { urhobo: 'Migwo', english: "I'm on my knees (Greetings)", pronunciation: 'mee-gwoh' },
        { urhobo: 'Omagare?', english: 'How are you?', pronunciation: 'oh-mah-gah-reh' },
        { urhobo: 'Omamegare', english: 'I am fine', pronunciation: 'oh-mah-meh-gah-reh' },
        { urhobo: 'Omamurhioke', english: 'Good morning', pronunciation: 'oh-mah-moo-ree-oh-keh' },
        { urhobo: 'Omamughoruvo', english: 'Good afternoon', pronunciation: 'oh-mah-moo-goh-roo-voh' },
        { urhobo: 'Omamuvovo', english: 'Good evening', pronunciation: 'oh-mah-moo-voh-voh' },
        { urhobo: 'Tode', english: 'Good night', pronunciation: 'toh-deh' },
        { urhobo: 'Orhurhu', english: 'Thank you', pronunciation: 'or-roo-roo' },
        { urhobo: 'Vrendo', english: 'Stand up and thank you', pronunciation: 'vren-doh' }
      ]
    },
    numbers: {
      name: 'Numbers',
      icon: '🔢',
      color: 'blue',
      words: [
        { urhobo: 'Oyen', english: 'One', pronunciation: 'oh-yen' },
        { urhobo: 'Ėrha', english: 'Two', pronunciation: 'er-ha' },
        { urhobo: 'Ėta', english: 'Three', pronunciation: 'er-ta' },
        { urhobo: 'Oho', english: 'Four', pronunciation: 'oh-hoh' },
        { urhobo: 'Urhurun', english: 'Five', pronunciation: 'oo-roo-roon' },
        { urhobo: 'Erhie', english: 'Six', pronunciation: 'er-hee-eh' },
        { urhobo: 'Erhije', english: 'Seven', pronunciation: 'er-hee-jeh' },
        { urhobo: 'Erhro', english: 'Eight', pronunciation: 'er-roh' },
        { urhobo: 'Ẹvẹn', english: 'Nine', pronunciation: 'eh-ven' },
        { urhobo: 'Ihwren', english: 'Ten', pronunciation: 'ee-wren' }
      ]
    },
    family: {
      name: 'Family Members',
      icon: '👨‍👩‍👧‍👦',
      color: 'green',
      words: [
        { urhobo: 'Oniovo', english: 'Father', pronunciation: 'oh-nee-oh-voh' },
        { urhobo: 'Oniruru', english: 'Mother', pronunciation: 'oh-nee-roo-roo' },
        { urhobo: 'Oni', english: 'Mother (alt)', pronunciation: 'oh-nee' },
        { urhobo: 'Ọsẹ', english: 'Father (alt)', pronunciation: 'oh-seh' },
        { urhobo: 'Omokaro', english: 'Child', pronunciation: 'oh-moh-kah-roh' },
        { urhobo: 'Omumuo', english: 'Son', pronunciation: 'oh-moo-moo-oh' },
        { urhobo: 'Umurhu', english: 'Daughter', pronunciation: 'oo-moo-roo' },
        { urhobo: 'Oniara', english: 'Brother', pronunciation: 'oh-nee-ah-rah' },
        { urhobo: 'Omokieme', english: 'Sister', pronunciation: 'oh-moh-kee-eh-meh' },
        { urhobo: 'Okpara', english: 'Elder brother', pronunciation: 'ok-pah-rah' },
        { urhobo: 'Koko', english: 'Grandmother', pronunciation: 'koh-koh' },
        { urhobo: 'Tata', english: 'Grandfather', pronunciation: 'tah-tah' }
      ]
    },
    colors: {
      name: 'Colors',
      icon: '🎨',
      color: 'purple',
      words: [
        { urhobo: 'Ribievwe', english: 'White', pronunciation: 'ree-bee-eh-vweh' },
        { urhobo: 'Otor', english: 'Black', pronunciation: 'oh-tor' },
        { urhobo: 'Ọbọrọ', english: 'Red', pronunciation: 'oh-boh-roh' },
        { urhobo: 'Ẹvwri', english: 'Yellow', pronunciation: 'eh-vwree' },
        { urhobo: 'Ughere', english: 'Blue', pronunciation: 'oo-geh-reh' },
        { urhobo: 'Ọrọrọ', english: 'Green', pronunciation: 'oh-roh-roh' }
      ]
    },
    food: {
      name: 'Food & Drink',
      icon: '🍲',
      color: 'red',
      words: [
        { urhobo: 'Oghwo', english: 'Soup', pronunciation: 'oh-gwoh' },
        { urhobo: 'Usiẹvwri', english: 'Starch', pronunciation: 'oo-see-eh-vwree' },
        { urhobo: 'Usi', english: 'Water', pronunciation: 'oo-see' },
        { urhobo: 'Ame', english: 'Water (alt)', pronunciation: 'ah-meh' },
        { urhobo: 'Uhuọriọ', english: 'Palm wine', pronunciation: 'oo-hoo-oh-ree-oh' },
        { urhobo: 'Ovwirhi', english: 'Meat', pronunciation: 'oh-vwee-ree' },
        { urhobo: 'Iriapha', english: 'Fish', pronunciation: 'ee-ree-ah-pah' },
        { urhobo: 'Iyere', english: 'Yam', pronunciation: 'ee-yeh-reh' },
        { urhobo: 'Ikpako', english: 'Cassava', pronunciation: 'ee-kpah-koh' },
        { urhobo: 'Iyọkọ', english: 'Banana', pronunciation: 'ee-yoh-koh' },
        { urhobo: 'Irosu', english: 'Rice', pronunciation: 'ee-roh-soo' }
      ]
    },
    body: {
      name: 'Body Parts',
      icon: '👤',
      color: 'yellow',
      words: [
        { urhobo: 'Ori', english: 'Head', pronunciation: 'oh-ree' },
        { urhobo: 'Edjẹ', english: 'Eye', pronunciation: 'eh-jeh' },
        { urhobo: 'Ughurhu', english: 'Ear', pronunciation: 'oo-goo-roo' },
        { urhobo: 'Imighe', english: 'Nose', pronunciation: 'ee-mee-geh' },
        { urhobo: 'Enu', english: 'Mouth', pronunciation: 'eh-noo' },
        { urhobo: 'Owo', english: 'Hand', pronunciation: 'oh-woh' },
        { urhobo: 'Eghwa', english: 'Leg', pronunciation: 'eh-gwah' },
        { urhobo: 'Ivri', english: 'Body', pronunciation: 'ee-vree' }
      ]
    },
    nature: {
      name: 'Nature & Animals',
      icon: '🌳',
      color: 'emerald',
      words: [
        { urhobo: 'Eni', english: 'Elephant', pronunciation: 'eh-nee' },
        { urhobo: 'Ẹvwé', english: 'Goat', pronunciation: 'eh-vweh' },
        { urhobo: 'Isio', english: 'Stars', pronunciation: 'ee-see-oh' },
        { urhobo: 'Erhi', english: 'Spirit', pronunciation: 'er-hee' },
        { urhobo: 'Ẹvwe', english: 'Kola', pronunciation: 'eh-vweh' },
        { urhobo: 'Ọghẹnẹ', english: 'God', pronunciation: 'oh-geh-neh' }
      ]
    },
    items: {
      name: 'Common Items',
      icon: '🏺',
      color: 'indigo',
      words: [
        { urhobo: 'Amwa', english: 'Wrapper', pronunciation: 'ahm-wah' },
        { urhobo: 'Urhu', english: 'Person', pronunciation: 'oo-roo' }
      ]
    }
  };

  const conversationDialogues = [
    {
      title: 'Morning Greeting',
      scene: '☀️ Early Morning Market',
      dialogue: [
        { speaker: 'You', urhobo: 'Omamurhioke!', english: 'Good morning!', shouldSay: true },
        { speaker: 'Elder', urhobo: 'Omamurhioke! Omagare?', english: 'Good morning! How are you?', shouldSay: false },
        { speaker: 'You', urhobo: 'Omamegare. Orhurhu!', english: "I'm fine. Thank you!", shouldSay: true },
        { speaker: 'Elder', urhobo: 'Vrendo!', english: 'Stand up and thank you!', shouldSay: false }
      ]
    },
    {
      title: 'Evening Greeting',
      scene: '🌅 Returning Home',
      dialogue: [
        { speaker: 'You', urhobo: 'Omamuvovo!', english: 'Good evening!', shouldSay: true },
        { speaker: 'Friend', urhobo: 'Omamuvovo! Re do vwo?', english: 'Good evening! Where are you going?', shouldSay: false },
        { speaker: 'You', urhobo: 'Me re ya orere me', english: 'I am going to my town', shouldSay: true },
        { speaker: 'Friend', urhobo: 'Ufuoma! Tode', english: 'Peace! Good night', shouldSay: false }
      ]
    },
    {
      title: 'Market Conversation',
      scene: '🛒 At the Market',
      dialogue: [
        { speaker: 'You', urhobo: 'Migwo!', english: "I'm on my knees (Greetings)!", shouldSay: true },
        { speaker: 'Seller', urhobo: 'Vrendo! Ovo gba rhe?', english: 'Stand up and thank you! What are you buying?', shouldSay: false },
        { speaker: 'You', urhobo: 'Me gba iyere', english: 'I am buying yam', shouldSay: true },
        { speaker: 'Seller', urhobo: 'O da re. Orhurhu!', english: 'It is good. Thank you!', shouldSay: false }
      ]
    }
  ];

  const lessons = [
    {
      title: 'Urhobo Vowels',
      duration: '10 min',
      description: 'Master the 7 vowel sounds - foundation of Urhobo pronunciation',
      content: vocabularyCategories.vowels.words
    },
    {
      title: 'Basic Greetings',
      duration: '5 min',
      description: 'Learn essential Urhobo greetings for different times of day',
      content: vocabularyCategories.greetings.words.slice(0, 5)
    },
    {
      title: 'Months & Seasons',
      duration: '12 min',
      description: 'Learn the Urhobo calendar and agricultural cycle',
      content: vocabularyCategories.months.words
    },
    {
      title: 'Numbers 1-10',
      duration: '8 min',
      description: 'Master counting from one to ten in Urhobo',
      content: vocabularyCategories.numbers.words
    },
    {
      title: 'Family Terms',
      duration: '10 min',
      description: 'Learn how to refer to family members',
      content: vocabularyCategories.family.words.slice(0, 6)
    },
    {
      title: 'Colors & Descriptions',
      duration: '6 min',
      description: 'Describe the world around you with colors',
      content: vocabularyCategories.colors.words
    }
  ];

  const quizQuestion = {
    question: 'What does "Migwo" mean in English?',
    options: ['Thank you', "I'm on my knees (Greetings)", 'Good morning', 'How are you?'],
    correct: 1
  };

  const trendingTopics = [
    { title: 'Marriage Ceremonies', views: '12.5K', trend: '+15%', icon: '💍', category: 'Culture' },
    { title: 'Traditional Music', views: '8.3K', trend: '+22%', icon: '🎵', category: 'Arts' },
    { title: 'Urhobo Proverbs', views: '15.2K', trend: '+8%', icon: '📜', category: 'Language' },
    { title: 'Festival Calendar', views: '6.7K', trend: '+31%', icon: '🎉', category: 'Culture' }
  ];

  const recentActivity = [
    { user: 'Ovie Okpako', action: 'added new artifact', item: 'Traditional Drum', time: '2h ago', avatar: '👨🏿' },
    { user: 'Elohor Asaba', action: 'completed course', item: 'Basic Urhobo', time: '4h ago', avatar: '👩🏿' },
    { user: 'John Eyube', action: 'shared story', item: 'Festival Memories', time: '6h ago', avatar: '👨🏿‍🦱' }
  ];

  const upcomingEvents = [
    { title: 'Live Q&A with Elder', date: 'Dec 15', time: '3:00 PM WAT', attendees: 124 },
    { title: 'Cooking Workshop', date: 'Dec 18', time: '5:00 PM WAT', attendees: 87 },
    { title: 'Language Challenge', date: 'Dec 20', time: '12:00 PM WAT', attendees: 203 }
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % wordsOfDay.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const categories = [
    { icon: <BookOpen className="w-6 h-6" />, title: 'Language', desc: 'Learn Urhobo words, phrases & grammar', color: 'bg-orange-500', items: '2,340', active: '450' },
    { icon: <Globe className="w-6 h-6" />, title: 'History', desc: 'Explore our rich historical heritage', color: 'bg-blue-500', items: '1,890', active: '320' },
    { icon: <Heart className="w-6 h-6" />, title: 'Culture', desc: 'Traditions, ceremonies & customs', color: 'bg-red-500', items: '3,120', active: '780' },
    { icon: <Music className="w-6 h-6" />, title: 'Arts', desc: 'Music, dance, crafts & artifacts', color: 'bg-purple-500', items: '1,560', active: '290' },
    { icon: <Users className="w-6 h-6" />, title: 'Community', desc: 'Connect with Urhobo people worldwide', color: 'bg-green-500', items: '10.2K', active: '1.2K' },
    { icon: <Award className="w-6 h-6" />, title: 'Learn', desc: 'Interactive courses & certifications', color: 'bg-yellow-500', items: '450', active: '2.1K' }
  ];

  const handleLike = (id) => {
    setLikedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
        setUserPoints(prev => prev + 5);
      }
      return newSet;
    });
  };

  const handleBookmark = (id) => {
    setBookmarkedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handlePlayPronunciation = () => {
    setIsPlaying(true);
    setTimeout(() => setIsPlaying(false), 1000);
  };

  const handleQuizAnswer = (index) => {
    setQuizAnswer(index);
    setShowQuizResult(true);
    if (index === quizQuestion.correct) {
      setUserPoints(prev => prev + 10);
    }
    setTimeout(() => {
      setShowQuizResult(false);
      setQuizAnswer(null);
    }, 2000);
  };

  const handleRecordPronunciation = () => {
    setIsRecording(true);
    setTimeout(() => {
      setIsRecording(false);
      const score = Math.floor(Math.random() * 30) + 70;
      setPronunciationScore(score);
      setUserPoints(prev => prev + score);
      setTimeout(() => setPronunciationScore(null), 3000);
    }, 2000);
  };

  const handleAIChat = async () => {
    if (!userInput.trim()) return;
    
    const userMessage = { role: 'user', content: userInput };
    setAiMessages(prev => [...prev, userMessage]);
    setUserInput('');
    setIsAiThinking(true);

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          messages: [
            {
              role: 'user',
              content: `You are an expert Urhobo language tutor. Help the user learn Urhobo language, correct their pronunciation, explain grammar, translate words, and provide cultural context. Be encouraging and patient. User says: "${userInput}"`
            }
          ],
        })
      });

      const data = await response.json();
      const aiResponse = data.content[0].text;
      
      setAiMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      setAiMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'I apologize, but I encountered an error. Please try again.' 
      }]);
    } finally {
      setIsAiThinking(false);
    }
  };

  const handleAIVoiceAnalysis = async (word) => {
    setSelectedWord(word);
    setIsRecording(true);
    setAiVoiceFeedback(null);

    // Simulate recording
    setTimeout(async () => {
      setIsRecording(false);
      setIsAiThinking(true);

      try {
        const response = await fetch('https://api.anthropic.com/v1/messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: 'claude-sonnet-4-20250514',
            max_tokens: 1000,
            messages: [
              {
                role: 'user',
                content: `As an Urhobo language pronunciation expert, analyze the pronunciation attempt for the word "${word.urhobo}" (${word.english}). Pronunciation guide: /${word.pronunciation}/. Provide detailed feedback on:
1. Accuracy score (0-100)
2. Specific sounds that need improvement
3. Tips for better pronunciation
4. Cultural context if relevant

Format your response as JSON:
{
  "score": 85,
  "feedback": "Great effort! Your tone was good...",
  "tips": ["Focus on the vowel sounds...", "Practice the 'r' sound..."],
  "encouragement": "You're making excellent progress!"
}`
              }
            ],
          })
        });

        const data = await response.json();
        const feedbackText = data.content[0].text;
        
        // Try to parse JSON from response
        try {
          const jsonMatch = feedbackText.match(/\{[\s\S]*\}/);
          if (jsonMatch) {
            const feedback = JSON.parse(jsonMatch[0]);
            setAiVoiceFeedback(feedback);
            setUserPoints(prev => prev + Math.floor(feedback.score));
            
            // Track mastery
            if (feedback.score >= 90 && !masteredWords.includes(word.urhobo)) {
              setMasteredWords(prev => [...prev, word.urhobo]);
            }
          }
        } catch {
          // Fallback if not JSON
          setAiVoiceFeedback({
            score: 75,
            feedback: feedbackText,
            tips: [],
            encouragement: "Keep practicing!"
          });
        }
      } catch (error) {
        setAiVoiceFeedback({
          score: 70,
          feedback: "Unable to analyze pronunciation. Please try again.",
          tips: ["Make sure to pronounce each syllable clearly"],
          encouragement: "Don't give up!"
        });
      } finally {
        setIsAiThinking(false);
      }
    }, 2000);
  };

  const handleTextToSpeech = (text) => {
    setIsSpeaking(true);
    // Simulate text-to-speech
    setTimeout(() => setIsSpeaking(false), 2000);
  };

  const generateCustomExercise = async () => {
    setIsAiThinking(true);
    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          messages: [
            {
              role: 'user',
              content: `Generate a personalized Urhobo language exercise for a ${userLevel} level learner who has mastered ${masteredWords.length} words and completed ${completedLessons.length} lessons. The exercise should be engaging and match their skill level. 

Format as JSON:
{
  "title": "Exercise title",
  "type": "quiz/translation/listening",
  "questions": [
    {"question": "Question text", "options": ["A", "B", "C", "D"], "correct": 0, "explanation": "Why this is correct"}
  ],
  "difficulty": "beginner/intermediate/advanced",
  "estimatedTime": "5 min"
}`
            }
          ],
        })
      });

      const data = await response.json();
      const exerciseText = data.content[0].text;
      
      try {
        const jsonMatch = exerciseText.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          const exercise = JSON.parse(jsonMatch[0]);
          setCustomExercise(exercise);
        }
      } catch {
        setCustomExercise({
          title: "Vocabulary Challenge",
          type: "quiz",
          questions: [
            {
              question: "What does 'Migwo' mean?",
              options: ["Thank you", "I'm on my knees (Greetings)", "Good morning", "Goodbye"],
              correct: 1,
              explanation: "Migwo is a respectful greeting gesture"
            }
          ],
          difficulty: userLevel.toLowerCase(),
          estimatedTime: "3 min"
        });
      }
    } catch (error) {
      console.error('Error generating exercise:', error);
    } finally {
      setIsAiThinking(false);
    }
  };

  const handleDownloadContent = (category) => {
    setDownloadedContent(prev => [...prev, category]);
    setUserPoints(prev => prev + 10);
    alert(`✅ ${category} downloaded for offline access! +10 points`);
  };

  const handleSendGroupMessage = async () => {
    if (!groupInput.trim()) return;
    
    const newMessage = {
      user: 'You',
      message: groupInput,
      time: 'Just now',
      score: 0
    };
    
    setGroupMessages(prev => [...prev, newMessage]);
    setGroupInput('');
    setIsAiThinking(true);

    // AI analyzes the message
    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          messages: [
            {
              role: 'user',
              content: `As an Urhobo language expert, analyze this sentence: "${groupInput}". Provide:
1. Pronunciation score (0-100)
2. Brief feedback
Format as JSON: {"score": 85, "feedback": "Good effort! ..."}`
            }
          ],
        })
      });

      const data = await response.json();
      const feedbackText = data.content[0].text;
      
      try {
        const jsonMatch = feedbackText.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          const result = JSON.parse(jsonMatch[0]);
          setGroupMessages(prev => 
            prev.map((msg, idx) => 
              idx === prev.length - 1 ? { ...msg, score: result.score } : msg
            )
          );
          setUserPoints(prev => prev + Math.floor(result.score));
        }
      } catch {
        setGroupMessages(prev => 
          prev.map((msg, idx) => 
            idx === prev.length - 1 ? { ...msg, score: 75 } : msg
          )
        );
      }
    } catch (error) {
      console.error('Error analyzing message:', error);
    } finally {
      setIsAiThinking(false);
    }
  };

  const handleStartCertificationExam = () => {
    setCertificationProgress(0);
    alert('🎓 Certification exam started! Good luck!');
    // Simulate exam progress
    const interval = setInterval(() => {
      setCertificationProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setUserPoints(prevPts => prevPts + 500);
          alert('🎉 Congratulations! You passed! Certificate awarded! +500 points');
          // Add notification
          setNotifications(prev => [{
            id: Date.now(),
            type: 'achievement',
            title: 'Certificate Earned! 🎓',
            message: `You've earned the ${certificationRequirements[certificationLevel].name}!`,
            time: 'Just now',
            read: false
          }, ...prev]);
          return 100;
        }
        return prev + 10;
      });
    }, 1000);
  };

  const markNotificationRead = (id) => {
    setNotifications(prev => 
      prev.map(notif => notif.id === id ? { ...notif, read: true } : notif)
    );
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Simulate push notifications
  useEffect(() => {
    const notificationInterval = setInterval(() => {
      const randomNotifs = [
        { type: 'reminder', title: 'Learning Reminder', message: "Time for your daily practice! 📚" },
        { type: 'achievement', title: 'Milestone!', message: "You're in the top 10% of learners! 🌟" },
        { type: 'group', title: 'Group Session', message: 'A new group session is starting now!' },
        { type: 'friend', title: 'Friend Activity', message: 'Ovie K. just completed a lesson!' }
      ];
      const random = randomNotifs[Math.floor(Math.random() * randomNotifs.length)];
      setNotifications(prev => [{
        id: Date.now(),
        ...random,
        time: 'Just now',
        read: false
      }, ...prev.slice(0, 9)]);
    }, 60000); // Every minute

    return () => clearInterval(notificationInterval);
  }, []);

  // Show ads for free users
  useEffect(() => {
    if (userSubscription === 'free') {
      const adInterval = setInterval(() => {
        setShowAd(true);
        setTimeout(() => setShowAd(false), 5000); // Show ad for 5 seconds
      }, 30000); // Every 30 seconds
      return () => clearInterval(adInterval);
    }
  }, [userSubscription]);

  const checkFeatureAccess = (feature) => {
    const access = {
      'ai_tutor_unlimited': ['premium', 'lifetime'],
      'group_sessions': ['basic', 'premium', 'lifetime'],
      'videos': ['basic', 'premium', 'lifetime'],
      '3d_artifacts': ['premium', 'lifetime'],
      'certification': ['premium', 'lifetime'],
      'offline_mode': ['premium', 'lifetime'],
      'advanced_analytics': ['premium', 'lifetime']
    };
    
    if (!access[feature]) return true;
    if (access[feature].includes(userSubscription)) return true;
    
    setPaywallFeature(feature);
    setShowPaywall(true);
    return false;
  };

  const handleSubscribe = (plan) => {
    // Simulate payment processing
    setUserSubscription(plan);
    if (plan !== 'lifetime') {
      const expiry = new Date();
      expiry.setMonth(expiry.getMonth() + 1);
      setSubscriptionExpiry(expiry);
    }
    setShowSubscriptionModal(false);
    setShowPaywall(false);
    setUserPoints(prev => prev + 100);
    setNotifications(prev => [{
      id: Date.now(),
      type: 'achievement',
      title: 'Welcome to ' + subscriptionPlans[plan].name + '! 🎉',
      message: 'You now have access to all ' + plan + ' features!',
      time: 'Just now',
      read: false
    }, ...prev]);
    alert(`🎉 Welcome to ${subscriptionPlans[plan].name}! Your subscription is active. +100 bonus points!`);
  };

  const handleAdClick = () => {
    setAdClicks(prev => prev + 1);
    setUserPoints(prev => prev + 2);
    setShowAd(false);
    alert('Thanks for supporting us! +2 points');
  };

  const copyReferralCode = () => {
    navigator.clipboard.writeText(referralCode);
    alert('Referral code copied! Share with friends to earn 20% commission on their subscriptions!');
  };

  const handleConversationResponse = () => {
    const currentDialogue = conversationDialogues[0].dialogue[conversationStep];
    if (userResponse.toLowerCase().includes(currentDialogue.urhobo.toLowerCase().slice(0, 4))) {
      setConversationFeedback('✅ Perfect! Well done!');
      setUserPoints(prev => prev + 15);
      setTimeout(() => {
        if (conversationStep < conversationDialogues[0].dialogue.length - 1) {
          setConversationStep(prev => prev + 1);
        } else {
          setConversationStep(0);
        }
        setConversationFeedback('');
        setUserResponse('');
      }, 2000);
    } else {
      setConversationFeedback('❌ Try again! Check the hint above.');
    }
  };

  const currentWord = wordsOfDay[currentWordIndex];

  const achievementBadges = [
    { id: 'first_word', name: 'First Steps', icon: '👶', desc: 'Learned your first word', unlocked: masteredWords.length >= 1 },
    { id: 'week_streak', name: 'Consistent Learner', icon: '🔥', desc: '7 day learning streak', unlocked: learningStreak >= 7 },
    { id: 'ten_words', name: 'Vocabulary Builder', icon: '📚', desc: 'Mastered 10 words', unlocked: masteredWords.length >= 10 },
    { id: 'first_lesson', name: 'Lesson Complete', icon: '🎓', desc: 'Completed your first lesson', unlocked: completedLessons.length >= 1 },
    { id: 'hundred_points', name: 'Point Collector', icon: '💯', desc: 'Earned 100 points', unlocked: userPoints >= 100 },
    { id: 'pronunciation_master', name: 'Perfect Pronunciation', icon: '🎯', desc: 'Scored 95%+ on pronunciation', unlocked: false },
    { id: 'cultural_explorer', name: 'Culture Enthusiast', icon: '🎭', desc: 'Learned about Urhobo culture', unlocked: selectedStory !== null },
    { id: 'community_member', name: 'Community Star', icon: '⭐', desc: 'Participated in group session', unlocked: groupMessages.some(m => m.user === 'You') }
  ];

  // Payment Setup & Withdrawal Screen
  if (showPaymentSetup) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-4">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => setShowPaymentSetup(false)}
            className="mb-6 flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Dashboard
          </button>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Revenue Overview */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-8 text-white">
                  <h2 className="text-3xl font-bold mb-2">💰 Revenue & Payouts</h2>
                  <p className="text-green-100">Manage your earnings and withdraw to your bank account</p>
                </div>

                <div className="p-8">
                  {/* Total Balance */}
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 text-white mb-8">
                    <p className="text-green-100 mb-2">Total Available Balance</p>
                    <p className="text-5xl font-bold mb-4">₦{totalRevenue.toLocaleString('en-NG', { minimumFractionDigits: 2 })}</p>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-green-200">This Month</p>
                        <p className="text-xl font-bold">₦{(totalRevenue * 0.3).toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-green-200">Last Month</p>
                        <p className="text-xl font-bold">₦{(totalRevenue * 0.4).toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-green-200">Pending</p>
                        <p className="text-xl font-bold">₦0</p>
                      </div>
                    </div>
                  </div>

                  {/* Revenue Breakdown */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Revenue Breakdown</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white">
                            💳
                          </div>
                          <div>
                            <p className="font-bold text-gray-900">Subscription Revenue</p>
                            <p className="text-sm text-gray-600">
                              {revenueBreakdown.subscriptions.basic.count + revenueBreakdown.subscriptions.premium.count + revenueBreakdown.subscriptions.lifetime.count} subscribers
                            </p>
                          </div>
                        </div>
                        <p className="text-2xl font-bold text-blue-600">
                          ₦{(revenueBreakdown.subscriptions.basic.revenue + revenueBreakdown.subscriptions.premium.revenue + revenueBreakdown.subscriptions.lifetime.revenue).toLocaleString()}
                        </p>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white">
                            📢
                          </div>
                          <div>
                            <p className="font-bold text-gray-900">Ad Revenue</p>
                            <p className="text-sm text-gray-600">{revenueBreakdown.ads.impressions.toLocaleString()} impressions, {revenueBreakdown.ads.clicks} clicks</p>
                          </div>
                        </div>
                        <p className="text-2xl font-bold text-purple-600">₦{revenueBreakdown.ads.revenue.toLocaleString()}</p>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-orange-50 rounded-xl">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white">
                            🤝
                          </div>
                          <div>
                            <p className="font-bold text-gray-900">Affiliate Commissions</p>
                            <p className="text-sm text-gray-600">{revenueBreakdown.affiliates.referrals} referrals</p>
                          </div>
                        </div>
                        <p className="text-2xl font-bold text-orange-600">₦{revenueBreakdown.affiliates.revenue.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>

                  {/* Withdrawal Request */}
                  <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl p-6 border-2 border-orange-300">
                    <h3 className="text-xl font-bold mb-4">💸 Request Withdrawal</h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Amount (₦)</label>
                        <input
                          type="number"
                          value={withdrawalRequest.amount}
                          onChange={(e) => setWithdrawalRequest(prev => ({ ...prev, amount: Number(e.target.value) }))}
                          placeholder="Enter amount"
                          className="w-full p-3 border-2 border-orange-300 rounded-xl focus:border-orange-500 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Method</label>
                        <select
                          value={withdrawalRequest.method}
                          onChange={(e) => setWithdrawalRequest(prev => ({ ...prev, method: e.target.value }))}
                          className="w-full p-3 border-2 border-orange-300 rounded-xl focus:border-orange-500 outline-none"
                        >
                          <option value="bank_transfer">Bank Transfer (Instant)</option>
                          <option value="mobile_money">Mobile Money</option>
                          <option value="crypto">Crypto (USDT)</option>
                        </select>
                      </div>
                    </div>
                    <button
                      onClick={handleWithdrawal}
                      className="w-full py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-bold hover:shadow-xl transition-all"
                    >
                      Withdraw ₦{withdrawalRequest.amount.toLocaleString()}
                    </button>
                    <p className="text-sm text-gray-600 mt-2 text-center">
                      Min: ₦500 • Processing: 24-48 hours • No fees
                    </p>
                  </div>

                  {/* Payout History */}
                  <div className="mt-8">
                    <h3 className="text-xl font-bold mb-4">Payout History</h3>
                    <div className="space-y-3">
                      {payoutHistory.map((payout, idx) => (
                        <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                          <div>
                            <p className="font-bold text-gray-900">₦{payout.amount.toLocaleString()}</p>
                            <p className="text-sm text-gray-600">{payout.method} • {payout.date}</p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                            payout.status === 'completed' ? 'bg-green-100 text-green-700' :
                            payout.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {payout.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Provider Setup */}
            <div className="space-y-6">
              <div className="bg-white rounded-3xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Payment Providers</h3>
                <div className="space-y-3">
                  {Object.entries(paymentProviders).map(([key, provider]) => (
                    <div
                      key={key}
                      onClick={() => setPaymentMethod(key)}
                      className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                        paymentMethod === key 
                          ? 'border-green-500 bg-green-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      } ${!provider.nigeriaSupport && 'opacity-50'}`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{provider.logo}</span>
                          <span className="font-bold">{provider.name}</span>
                        </div>
                        {provider.recommended && (
                          <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                            Recommended
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-600 mb-1">Fees: {provider.fees}</p>
                      <p className="text-xs text-gray-600">Payout: {provider.payout}</p>
                    </div>
                  ))}
                </div>

                {paymentProviders[paymentMethod] && (
                  <div className="mt-4 p-4 bg-blue-50 rounded-xl">
                    <p className="text-sm text-gray-700">
                      {paymentProviders[paymentMethod].setup}
                    </p>
                  </div>
                )}
              </div>

              {/* Bank Details */}
              <div className="bg-white rounded-3xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">🏦 Bank Details</h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Bank Name</label>
                    <select
                      value={bankDetails.bankName}
                      onChange={(e) => setBankDetails(prev => ({ ...prev, bankName: e.target.value }))}
                      className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-green-500 outline-none"
                    >
                      <option value="">Select Bank</option>
                      {nigerianBanks.map(bank => (
                        <option key={bank} value={bank}>{bank}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Account Number</label>
                    <input
                      type="text"
                      value={bankDetails.accountNumber}
                      onChange={(e) => setBankDetails(prev => ({ ...prev, accountNumber: e.target.value }))}
                      placeholder="0123456789"
                      className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-green-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Account Name</label>
                    <input
                      type="text"
                      value={bankDetails.accountName}
                      onChange={(e) => setBankDetails(prev => ({ ...prev, accountName: e.target.value }))}
                      placeholder="Your Name"
                      className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-green-500 outline-none"
                    />
                  </div>
                  <button
                    onClick={() => alert('✅ Bank details saved! You can now receive payments.')}
                    className="w-full py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-all"
                  >
                    Save Bank Details
                  </button>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl shadow-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-4">💰 Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Total Earnings</span>
                    <span className="font-bold">₦{(totalRevenue * 3).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Withdrawn</span>
                    <span className="font-bold">₦{payoutHistory.filter(p => p.status === 'completed').reduce((a, b) => a + b.amount, 0).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Next Payout</span>
                    <span className="font-bold">15th of month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Subscription Modal
  if (showSubscriptionModal) {
    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
        <div className="bg-white rounded-3xl max-w-6xl w-full shadow-2xl my-8">
          <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 p-8 text-white relative overflow-hidden">
            <button
              onClick={() => setShowSubscriptionModal(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="text-center">
              <Trophy className="w-16 h-16 mx-auto mb-4" />
              <h2 className="text-4xl font-bold mb-2">Unlock Your Full Potential</h2>
              <p className="text-xl text-orange-100">Choose the perfect plan for your learning journey</p>
            </div>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(subscriptionPlans).map(([key, plan]) => (
                <div
                  key={key}
                  className={`relative rounded-3xl p-6 transition-all hover:scale-105 ${
                    plan.popular 
                      ? 'ring-4 ring-purple-500 shadow-2xl' 
                      : 'ring-2 ring-gray-200 hover:ring-gray-300'
                  } ${key === userSubscription ? 'bg-green-50' : 'bg-white'}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  )}
                  {plan.badge && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                      {plan.badge}
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    {plan.price === 0 ? (
                      <div className="text-4xl font-bold text-gray-900">Free</div>
                    ) : (
                      <div>
                        <div className="text-4xl font-bold text-gray-900">
                          ${plan.price}
                          {plan.period !== 'one-time' && <span className="text-lg text-gray-600">/{plan.period}</span>}
                        </div>
                        {plan.period === 'one-time' && (
                          <p className="text-sm text-gray-600 mt-1">One-time payment</p>
                        )}
                      </div>
                    )}
                    {plan.savings && (
                      <p className="text-green-600 font-medium text-sm mt-2">{plan.savings}</p>
                    )}
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="text-sm flex items-start gap-2">
                        <span className={feature.startsWith('✓') ? 'text-green-600' : feature.startsWith('✗') ? 'text-gray-400' : 'text-orange-600'}>
                          {feature.split(' ')[0]}
                        </span>
                        <span className={feature.startsWith('✗') ? 'text-gray-400' : 'text-gray-700'}>
                          {feature.substring(2)}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleSubscribe(key)}
                    disabled={key === userSubscription}
                    className={`w-full py-3 rounded-xl font-bold transition-all ${
                      key === userSubscription
                        ? 'bg-green-500 text-white cursor-not-allowed'
                        : plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:shadow-xl'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    {key === userSubscription ? '✓ Current Plan' : key === 'free' ? 'Current Plan' : 'Subscribe Now'}
                  </button>
                </div>
              ))}
            </div>

            {/* Affiliate Program */}
            <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <Share2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Affiliate Program</h3>
                  <p className="text-gray-600">Earn 20-35% commission on every referral!</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4">
                  <p className="text-sm text-gray-600 mb-2">Your Referral Code</p>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={referralCode}
                      readOnly
                      className="flex-1 p-3 bg-gray-100 rounded-lg font-mono font-bold"
                    />
                    <button
                      onClick={copyReferralCode}
                      className="px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all"
                    >
                      Copy
                    </button>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <p className="text-sm text-gray-600 mb-2">Your Earnings</p>
                  <p className="text-3xl font-bold text-green-600">${affiliateEarnings.toFixed(2)}</p>
                  <p className="text-sm text-gray-600">From {Math.floor(affiliateEarnings / 2)} referrals</p>
                </div>
              </div>
            </div>

            {/* Money Back Guarantee */}
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                ✓ 30-day money-back guarantee • ✓ Cancel anytime • ✓ Secure payment
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Paywall Modal
  if (showPaywall) {
    const featureNames = {
      'ai_tutor_unlimited': 'Unlimited AI Tutor',
      'group_sessions': 'Group Learning Sessions',
      'videos': 'Video Library',
      '3d_artifacts': '3D Artifact Viewer',
      'certification': 'Certification Program',
      'offline_mode': 'Offline Mode',
      'advanced_analytics': 'Advanced Analytics'
    };

    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl">
          <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-8 text-white text-center rounded-t-3xl">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-bold mb-2">Upgrade to Premium</h2>
            <p className="text-purple-100">Unlock {featureNames[paywallFeature]}</p>
          </div>

          <div className="p-8">
            <div className="bg-purple-50 rounded-2xl p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-3">What you'll get:</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Unlimited access to {featureNames[paywallFeature]}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>All Premium features</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Ad-free experience</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Priority support</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => setShowSubscriptionModal(true)}
              className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl font-bold text-lg hover:shadow-xl transition-all mb-3"
            >
              View Plans & Pricing
            </button>
            <button
              onClick={() => setShowPaywall(false)}
              className="w-full py-3 text-gray-600 hover:text-gray-900 transition-all"
            >
              Maybe Later
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Ad Display (for free users)
  {showAd && userSubscription === 'free' && (
    <div className="fixed bottom-20 right-4 w-80 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden animate-bounce">
      <button
        onClick={() => setShowAd(false)}
        className="absolute top-2 right-2 w-8 h-8 bg-gray-900/80 hover:bg-gray-900 rounded-full flex items-center justify-center transition-all z-10"
      >
        <X className="w-4 h-4 text-white" />
      </button>
      <div
        onClick={handleAdClick}
        className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 cursor-pointer hover:opacity-90 transition-all"
      >
        <p className="text-white font-bold text-lg mb-2">📚 Learn Faster with Premium!</p>
        <p className="text-blue-100 text-sm mb-3">Unlock all features and remove ads</p>
        <div className="bg-white text-blue-600 px-4 py-2 rounded-lg font-bold text-center">
          Get 50% Off Today
        </div>
      </div>
      <div className="bg-gray-100 px-4 py-2 text-xs text-gray-600 text-center">
        Ad • Click to support us (+2 pts)
      </div>
    </div>
  )}

  // 3D Artifact Viewer
  if (show3DArtifact) {
    const artifact = artifacts3D.find(a => a.id === selectedArtifact);
    if (!artifact) return null;

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 p-4">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => {
              setShow3DArtifact(false);
              setArtifactRotation(0);
            }}
            className="mb-6 flex items-center gap-2 text-white hover:text-orange-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Artifacts
          </button>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* 3D View */}
            <div className="bg-gradient-to-br from-purple-800 to-indigo-800 rounded-3xl p-8 shadow-2xl">
              <div className="bg-black/30 rounded-2xl p-12 mb-6 relative overflow-hidden">
                <div 
                  className="text-9xl text-center transition-transform duration-300 cursor-grab active:cursor-grabbing"
                  style={{ transform: `rotateY(${artifactRotation}deg)` }}
                  onMouseDown={(e) => {
                    const startX = e.clientX;
                    const startRotation = artifactRotation;
                    const handleMouseMove = (moveEvent) => {
                      const diff = moveEvent.clientX - startX;
                      setArtifactRotation(startRotation + diff);
                    };
                    const handleMouseUp = () => {
                      document.removeEventListener('mousemove', handleMouseMove);
                      document.removeEventListener('mouseup', handleMouseUp);
                    };
                    document.addEventListener('mousemove', handleMouseMove);
                    document.addEventListener('mouseup', handleMouseUp);
                  }}
                >
                  {artifact.model}
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/50 text-sm">
                  Drag to rotate 360°
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setArtifactRotation(prev => prev - 45)}
                  className="flex-1 py-3 bg-white/20 hover:bg-white/30 text-white rounded-xl transition-all"
                >
                  ← Rotate Left
                </button>
                <button
                  onClick={() => setArtifactRotation(0)}
                  className="flex-1 py-3 bg-white/20 hover:bg-white/30 text-white rounded-xl transition-all"
                >
                  Reset
                </button>
                <button
                  onClick={() => setArtifactRotation(prev => prev + 45)}
                  className="flex-1 py-3 bg-white/20 hover:bg-white/30 text-white rounded-xl transition-all"
                >
                  Rotate Right →
                </button>
              </div>
            </div>

            {/* Info Panel */}
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-5xl">{artifact.model}</div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">{artifact.name}</h2>
                    <p className="text-orange-600 font-medium">{artifact.category}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-lg mb-6">{artifact.description}</p>

                <div className="bg-purple-50 rounded-2xl p-6 mb-6">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Star className="w-5 h-5 text-purple-600" />
                    Interesting Facts
                  </h3>
                  <ul className="space-y-2">
                    {artifact.facts.map((fact, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span className="text-gray-700">{fact}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-2xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-orange-600" />
                    Cultural Significance
                  </h3>
                  <p className="text-gray-700">{artifact.culturalSignificance}</p>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-6">
                  <button
                    onClick={() => {
                      setUserPoints(prev => prev + 30);
                      alert('🎨 Artifact explored! +30 points');
                    }}
                    className="py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl font-bold hover:shadow-lg transition-all"
                  >
                    Mark as Explored
                  </button>
                  <button
                    onClick={() => handleDownloadContent(artifact.name)}
                    className="py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-bold hover:shadow-lg transition-all"
                  >
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Video Library Screen
  if (showVideoLibrary) {
    if (selectedVideo) {
      const video = videoLibrary.find(v => v.id === selectedVideo);
      return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-4">
          <div className="max-w-5xl mx-auto">
            <button
              onClick={() => setSelectedVideo(null)}
              className="mb-6 flex items-center gap-2 text-white hover:text-orange-400 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Library
            </button>

            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              {/* Video Player */}
              <div className="bg-black aspect-video flex items-center justify-center relative">
                <div className="text-9xl">{video.thumbnail}</div>
                <button className="absolute inset-0 flex items-center justify-center bg-black/50 hover:bg-black/30 transition-all group">
                  <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-10 h-10 text-white ml-1" />
                  </div>
                </button>
                <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1 rounded-lg text-sm">
                  {video.duration}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-bold">
                    {video.category}
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-bold">
                    {video.difficulty}
                  </span>
                  <span className="flex items-center gap-1 text-gray-600">
                    <Eye className="w-4 h-4" />
                    {video.views} views
                  </span>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-4">{video.title}</h2>
                <p className="text-gray-700 text-lg mb-6">{video.description}</p>

                <div className="bg-blue-50 rounded-2xl p-6 mb-6">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                    Learn These Words
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {video.vocabulary.map((word, idx) => (
                      <div key={idx} className="bg-white rounded-xl p-4 flex items-center justify-between">
                        <span className="font-medium text-gray-900">{word}</span>
                        <button
                          onClick={() => handleTextToSpeech(word)}
                          className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    setUserPoints(prev => prev + 40);
                    setSelectedVideo(null);
                    alert('🎬 Video completed! +40 points');
                  }}
                  className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl font-bold hover:shadow-lg transition-all"
                >
                  Mark as Watched (+40 pts)
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-4">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => setShowVideoLibrary(false)}
            className="mb-6 flex items-center gap-2 text-white hover:text-orange-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>

          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-4">🎬 Video Library</h2>
            <p className="text-xl text-gray-300">Learn Urhobo through immersive video content</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoLibrary.map((video) => (
              <div
                key={video.id}
                onClick={() => setSelectedVideo(video.id)}
                className="bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all cursor-pointer group hover:-translate-y-2"
              >
                <div className="bg-gradient-to-br from-orange-400 to-red-500 aspect-video flex items-center justify-center relative">
                  <div className="text-8xl">{video.thumbnail}</div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-orange-600 ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-orange-600 bg-orange-100 px-2 py-1 rounded-full">
                      {video.category}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {video.views}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{video.description}</p>
                  <span className="text-xs font-medium text-purple-600">{video.difficulty}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Cultural Content Screen
  if (showCulturalContent) {
    if (selectedStory) {
      const story = culturalStories.find(s => s.id === selectedStory);
      return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 p-4">
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => setSelectedStory(null)}
              className="mb-6 flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Stories
            </button>

            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 p-8 text-white">
                <div className="text-6xl mb-4">{story.thumbnail}</div>
                <h2 className="text-3xl font-bold mb-2">{story.title}</h2>
                <div className="flex items-center gap-4 text-orange-100">
                  <span>{story.category}</span>
                  <span>•</span>
                  <span>{story.duration}</span>
                  <span>•</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full">{story.difficulty}</span>
                </div>
              </div>

              <div className="p-8">
                <p className="text-gray-600 text-lg mb-6">{story.description}</p>
                
                <div className="prose max-w-none mb-8">
                  <p className="text-gray-800 text-lg leading-relaxed">{story.content}</p>
                </div>

                <div className="bg-purple-50 rounded-2xl p-6 mb-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-purple-600" />
                    Key Vocabulary
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {story.vocabulary.map((word, idx) => (
                      <div key={idx} className="bg-white rounded-xl p-4 flex items-center justify-between">
                        <span className="font-medium text-gray-900">{word}</span>
                        <button
                          onClick={() => handleTextToSpeech(word)}
                          className="p-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4">📝 Comprehension Check</h3>
                  {story.quiz.map((q, idx) => (
                    <div key={idx} className="mb-4">
                      <p className="font-medium text-gray-900 mb-3">{q.question}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {q.options.map((option, optIdx) => (
                          <button
                            key={optIdx}
                            onClick={() => {
                              if (optIdx === q.correct) {
                                setUserPoints(prev => prev + 20);
                                alert('✅ Correct! +20 points');
                              } else {
                                alert('❌ Try again!');
                              }
                            }}
                            className="p-3 bg-white rounded-xl hover:bg-blue-100 transition-all text-left"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => {
                    setUserPoints(prev => prev + 50);
                    setSelectedStory(null);
                    alert('🎉 Story completed! +50 points');
                  }}
                  className="w-full mt-6 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl font-bold hover:shadow-lg transition-all"
                >
                  Mark as Complete (+50 pts)
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 p-4">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => setShowCulturalContent(false)}
            className="mb-6 flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">📚 Cultural Stories & Traditions</h2>
            <p className="text-xl text-gray-600">Immerse yourself in Urhobo culture through stories, videos, and artifacts</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {culturalStories.map((story) => (
              <div
                key={story.id}
                onClick={() => setSelectedStory(story.id)}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all cursor-pointer group hover:-translate-y-2"
              >
                <div className="bg-gradient-to-br from-orange-400 to-red-500 p-8 text-center">
                  <div className="text-6xl mb-4">{story.thumbnail}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-orange-600 bg-orange-100 px-2 py-1 rounded-full">
                      {story.category}
                    </span>
                    <span className="text-xs text-gray-500">{story.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{story.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-purple-600">{story.difficulty}</span>
                    <ChevronRight className="w-5 h-5 text-orange-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {offlineMode && (
            <div className="mt-12 bg-green-50 border-2 border-green-300 rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Offline Mode Enabled</h3>
                  <p className="text-gray-600">Downloaded content available without internet</p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-3">
                {downloadedContent.map((content, idx) => (
                  <div key={idx} className="p-3 bg-white rounded-xl flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium">{content}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Teacher Dashboard Screen  
  if (showTeacherDashboard) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => setShowTeacherDashboard(false)}
            className="mb-6 flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>

          <div className="mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">👨‍🏫 Teacher Dashboard</h2>
            <p className="text-xl text-gray-600">Monitor student progress and manage your class</p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-6 text-white">
              <Users className="w-10 h-10 mb-3" />
              <p className="text-4xl font-bold mb-1">{students.length}</p>
              <p className="text-blue-100">Total Students</p>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-6 text-white">
              <TrendingUp className="w-10 h-10 mb-3" />
              <p className="text-4xl font-bold mb-1">{Math.round(students.reduce((a, b) => a + b.progress, 0) / students.length)}%</p>
              <p className="text-green-100">Avg Progress</p>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-6 text-white">
              <Zap className="w-10 h-10 mb-3" />
              <p className="text-4xl font-bold mb-1">{Math.round(students.reduce((a, b) => a + b.streak, 0) / students.length)}</p>
              <p className="text-orange-100">Avg Streak</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl p-6 text-white">
              <Clock className="w-10 h-10 mb-3" />
              <p className="text-4xl font-bold mb-1">{students.filter(s => s.lastActive.includes('min') || s.lastActive.includes('hour')).length}</p>
              <p className="text-purple-100">Active Today</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Student Progress</h3>
            <div className="space-y-4">
              {students.map((student, idx) => (
                <div key={idx} className="p-6 bg-gray-50 rounded-2xl hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">{student.avatar}</div>
                      <div>
                        <p className="font-bold text-gray-900 text-lg">{student.name}</p>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full">{student.level}</span>
                          <span className="flex items-center gap-1">
                            <Zap className="w-4 h-4 text-yellow-500" />
                            {student.streak} days
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {student.lastActive}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-gray-900">{student.progress}%</p>
                      <p className="text-sm text-gray-500">Complete</p>
                    </div>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500"
                      style={{ width: `${student.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => alert('📧 Progress report sent to all students!')}
              className="w-full mt-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-bold hover:shadow-lg transition-all"
            >
              📧 Send Progress Reports
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Certification Screen
  if (showCertification) {
    const cert = certificationRequirements[certificationLevel];
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 p-4">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setShowCertification(false)}
            className="mb-6 flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 p-12 text-center text-white">
              <Trophy className="w-20 h-20 mx-auto mb-4" />
              <h2 className="text-4xl font-bold mb-2">{cert.name}</h2>
              <p className="text-yellow-100 text-lg">Official Urhobo Language Certification</p>
            </div>

            <div className="p-8">
              <div className="flex gap-4 mb-8">
                {['beginner', 'intermediate', 'advanced'].map((level) => (
                  <button
                    key={level}
                    onClick={() => setCertificationLevel(level)}
                    className={`flex-1 py-3 rounded-xl font-bold transition-all ${
                      certificationLevel === level
                        ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {level.charAt(0).toUpperCase() + level.slice(1)}
                  </button>
                ))}
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">📋 Requirements</h3>
                <div className="space-y-2">
                  {cert.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                      <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700">{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-6 mb-6">
                <h3 className="text-xl font-bold mb-4">🎓 Final Exam Details</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-blue-600">{cert.exam.questions}</p>
                    <p className="text-gray-600">Questions</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-purple-600">{cert.exam.passingScore}%</p>
                    <p className="text-gray-600">Passing Score</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-orange-600">{cert.exam.duration}</p>
                    <p className="text-gray-600">Duration</p>
                  </div>
                </div>
              </div>

              {certificationProgress > 0 && (
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">Exam Progress</span>
                    <span className="font-bold text-orange-600">{certificationProgress}%</span>
                  </div>
                  <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-green-500 to-emerald-600 transition-all duration-500"
                      style={{ width: `${certificationProgress}%` }}
                    />
                  </div>
                </div>
              )}

              <button
                onClick={handleStartCertificationExam}
                disabled={certificationProgress > 0 && certificationProgress < 100}
                className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl font-bold text-lg hover:shadow-xl transition-all disabled:opacity-50"
              >
                {certificationProgress === 0 ? '🎯 Start Certification Exam' : certificationProgress === 100 ? '✅ Exam Completed!' : '⏳ Exam in Progress...'}
              </button>

              <p className="text-center text-gray-500 text-sm mt-4">
                Certificate will be issued upon successful completion
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Progress Dashboard Screen
  if (showProgressDashboard) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-4">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => setShowProgressDashboard(false)}
            className="mb-6 flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Stats */}
            <div className="lg:col-span-2 space-y-6">
              {/* Overview Cards */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl p-6 text-white">
                  <Trophy className="w-10 h-10 mb-3" />
                  <p className="text-4xl font-bold mb-1">{userPoints}</p>
                  <p className="text-orange-100">Total Points</p>
                </div>
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-6 text-white">
                  <Zap className="w-10 h-10 mb-3" />
                  <p className="text-4xl font-bold mb-1">{learningStreak}</p>
                  <p className="text-blue-100">Day Streak 🔥</p>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-6 text-white">
                  <BookOpen className="w-10 h-10 mb-3" />
                  <p className="text-4xl font-bold mb-1">{masteredWords.length}</p>
                  <p className="text-green-100">Words Mastered</p>
                </div>
              </div>

              {/* Progress Chart */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Your Learning Journey</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700">Weekly Goal Progress</span>
                      <span className="font-bold text-orange-600">{userPoints}/{weeklyGoal} pts</span>
                    </div>
                    <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-orange-500 to-red-600 transition-all duration-500"
                        style={{ width: `${Math.min((userPoints / weeklyGoal) * 100, 100)}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700">Level Progress</span>
                      <span className="font-bold text-purple-600">{userLevel}</span>
                    </div>
                    <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-600 transition-all duration-500"
                        style={{ width: `${(completedLessons.length / lessons.length) * 100}%` }}
                      />
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{completedLessons.length}/{lessons.length} lessons completed</p>
                  </div>
                </div>

                {/* AI Insights */}
                <div className="mt-8 p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl">
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">🤖</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-2">AI Learning Insights</h4>
                      <p className="text-gray-700 text-sm mb-3">
                        Great progress! You're excelling at pronunciation. Focus on vowel sounds this week to reach Intermediate level faster.
                      </p>
                      <button
                        onClick={generateCustomExercise}
                        disabled={isAiThinking}
                        className="px-4 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-all disabled:opacity-50"
                      >
                        {isAiThinking ? 'Generating...' : 'Generate Custom Exercise'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Award className="w-6 h-6 text-yellow-500" />
                  Achievements
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {achievementBadges.map((badge) => (
                    <div
                      key={badge.id}
                      className={`p-4 rounded-2xl border-2 transition-all ${
                        badge.unlocked
                          ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-400'
                          : 'bg-gray-50 border-gray-200 opacity-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-4xl">{badge.icon}</div>
                        <div className="flex-1">
                          <p className="font-bold text-gray-900">{badge.name}</p>
                          <p className="text-sm text-gray-600">{badge.desc}</p>
                        </div>
                        {badge.unlocked && <Check className="w-6 h-6 text-green-600" />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="bg-white rounded-3xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button
                    onClick={() => {
                      setShowProgressDashboard(false);
                      setShowLearningModule(true);
                    }}
                    className="w-full p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transition-all text-left"
                  >
                    📚 Continue Learning
                  </button>
                  <button
                    onClick={() => {
                      setShowProgressDashboard(false);
                      setShowAITutor(true);
                    }}
                    className="w-full p-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl font-medium hover:shadow-lg transition-all text-left"
                  >
                    🤖 Chat with AI Tutor
                  </button>
                  <button
                    onClick={() => setShowGroupSession(true)}
                    className="w-full p-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-medium hover:shadow-lg transition-all text-left"
                  >
                    👥 Join Group Session
                  </button>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-3xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  {masteredWords.slice(-3).map((word, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-green-50 rounded-xl">
                      <Check className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="font-medium text-gray-900">Mastered "{word}"</p>
                        <p className="text-xs text-gray-500">Just now</p>
                      </div>
                    </div>
                  ))}
                  {completedLessons.slice(-2).map((lesson, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                      <BookOpen className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-medium text-gray-900">Completed lesson</p>
                        <p className="text-xs text-gray-500">Today</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Leaderboard Preview */}
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl p-6 text-white shadow-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Trophy className="w-5 h-5" />
                  Weekly Leaderboard
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 bg-white/20 backdrop-blur rounded-xl p-3">
                    <span className="text-2xl">🥇</span>
                    <div className="flex-1">
                      <p className="font-bold">Elohor M.</p>
                      <p className="text-sm text-yellow-100">1,245 pts</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white/20 backdrop-blur rounded-xl p-3">
                    <span className="text-2xl">🥈</span>
                    <div className="flex-1">
                      <p className="font-bold">Ovie K.</p>
                      <p className="text-sm text-yellow-100">987 pts</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white/20 backdrop-blur rounded-xl p-3">
                    <span className="text-2xl">🥉</span>
                    <div className="flex-1">
                      <p className="font-bold">You</p>
                      <p className="text-sm text-yellow-100">{userPoints} pts</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Group Session Screen
  if (showGroupSession) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-4">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => setShowGroupSession(false)}
            className="mb-6 flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Group Learning Session</h2>
                  <p className="text-green-100">Practice Urhobo with fellow learners • AI Moderated</p>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="font-bold">Live</span>
                </div>
              </div>
            </div>

            {/* Participants */}
            <div className="p-6 border-b">
              <h3 className="font-bold text-gray-900 mb-4">Participants ({groupParticipants.filter(p => p.online).length} online)</h3>
              <div className="grid md:grid-cols-4 gap-4">
                {groupParticipants.map((participant, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-2xl border-2 transition-all ${
                      participant.online
                        ? 'bg-green-50 border-green-300'
                        : 'bg-gray-50 border-gray-200 opacity-60'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{participant.avatar}</div>
                      <div className="flex-1">
                        <p className="font-bold text-gray-900">{participant.name}</p>
                        <p className="text-xs text-gray-600">{participant.level}</p>
                      </div>
                      {participant.online && (
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Session Content */}
            <div className="p-6">
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 mb-6">
                <div className="flex items-start gap-3">
                  <div className="text-4xl">🤖</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-2">AI Moderator</h4>
                    <p className="text-gray-700 mb-4">
                      Welcome everyone! Today we'll practice greetings and introductions. Let's start with a round-robin where each person introduces themselves in Urhobo.
                    </p>
                    <div className="bg-white rounded-xl p-4">
                      <p className="text-sm text-gray-600 mb-2">Practice phrase:</p>
                      <p className="text-xl font-bold text-purple-600">Migwo, me mu [Your Name]</p>
                      <p className="text-gray-600">Hello, I am [Your Name]</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Area */}
              <div className="space-y-4 mb-6">
                {groupMessages.map((msg, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-2xl">{groupParticipants.find(p => p.name === msg.user)?.avatar || '👤'}</span>
                    <div className="flex-1 bg-gray-100 rounded-2xl p-4">
                      <p className="font-bold text-gray-900 text-sm mb-1">{msg.user}</p>
                      <p className="text-gray-700">{msg.message}</p>
                      {msg.score > 0 && (
                        <div className="mt-2 flex items-center gap-2">
                          <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(msg.score / 20)
                                    ? 'fill-yellow-400 text-yellow-400'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm font-medium text-green-600">
                            Score: {msg.score}%
                          </span>
                        </div>
                      )}
                      <p className="text-xs text-gray-500 mt-1">{msg.time}</p>
                    </div>
                  </div>
                ))}

                {isAiThinking && (
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🤖</div>
                    <div className="bg-purple-100 rounded-2xl p-4">
                      <p className="font-bold text-gray-900 text-sm mb-1">AI Moderator</p>
                      <div className="flex gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Your Turn */}
              <div className="bg-orange-50 border-2 border-orange-300 rounded-2xl p-6">
                <p className="font-bold text-orange-900 mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Your Turn!
                </p>
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={groupInput}
                    onChange={(e) => setGroupInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendGroupMessage()}
                    placeholder="Type your introduction in Urhobo..."
                    className="flex-1 p-4 border-2 border-orange-300 rounded-xl focus:border-orange-500 outline-none"
                  />
                  <button
                    onClick={handleSendGroupMessage}
                    disabled={isAiThinking || !groupInput.trim()}
                    className="px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-bold hover:shadow-lg transition-all disabled:opacity-50"
                  >
                    Send
                  </button>
                  <button
                    onClick={() => {
                      setIsRecording(!isRecording);
                      if (!isRecording) {
                        setTimeout(() => {
                          setIsRecording(false);
                          setGroupInput('Migwo, me mu Student!');
                        }, 2000);
                      }
                    }}
                    className={`px-6 py-4 rounded-xl font-bold transition-all ${
                      isRecording
                        ? 'bg-red-500 text-white animate-pulse'
                        : 'bg-purple-500 text-white hover:bg-purple-600'
                    }`}
                  >
                    <Mic className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // AI Tutor Screen
  if (showAITutor) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => {
              setShowAITutor(false);
              setAiMessages([]);
            }}
            className="mb-6 flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl animate-pulse">
                  🤖
                </div>
                <div>
                  <h2 className="text-2xl font-bold">AI Language Tutor</h2>
                  <p className="text-purple-100">Powered by Claude Sonnet 4 - Your personal Urhobo teacher</p>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="h-96 overflow-y-auto p-6 space-y-4 bg-gray-50">
              {aiMessages.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">👋</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Welcome to AI Tutoring!</h3>
                  <p className="text-gray-600 mb-4">Ask me anything about Urhobo language:</p>
                  <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
                    <button
                      onClick={() => setUserInput("How do I pronounce 'Migwo'?")}
                      className="p-3 bg-white rounded-xl hover:shadow-md transition-all text-left"
                    >
                      <p className="text-sm font-medium text-gray-900">🗣️ Pronunciation help</p>
                    </button>
                    <button
                      onClick={() => setUserInput("Teach me basic greetings")}
                      className="p-3 bg-white rounded-xl hover:shadow-md transition-all text-left"
                    >
                      <p className="text-sm font-medium text-gray-900">👋 Learn greetings</p>
                    </button>
                    <button
                      onClick={() => setUserInput("Explain Urhobo vowels")}
                      className="p-3 bg-white rounded-xl hover:shadow-md transition-all text-left"
                    >
                      <p className="text-sm font-medium text-gray-900">🔤 Vowel sounds</p>
                    </button>
                    <button
                      onClick={() => setUserInput("Tell me about Urhobo culture")}
                      className="p-3 bg-white rounded-xl hover:shadow-md transition-all text-left"
                    >
                      <p className="text-sm font-medium text-gray-900">🎭 Cultural context</p>
                    </button>
                  </div>
                </div>
              )}
              
              {aiMessages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-md p-4 rounded-2xl ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                        : 'bg-white text-gray-900 shadow-md'
                    }`}
                  >
                    <p className="text-sm font-bold mb-1">
                      {msg.role === 'user' ? 'You' : '🤖 AI Tutor'}
                    </p>
                    <p className="whitespace-pre-wrap">{msg.content}</p>
                  </div>
                </div>
              ))}

              {isAiThinking && (
                <div className="flex justify-start">
                  <div className="bg-white p-4 rounded-2xl shadow-md">
                    <p className="text-sm font-bold mb-1">🤖 AI Tutor</p>
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-6 bg-white border-t">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAIChat()}
                  placeholder="Ask me anything about Urhobo language..."
                  className="flex-1 p-4 border-2 border-gray-300 rounded-xl focus:border-purple-500 outline-none"
                />
                <button
                  onClick={handleAIChat}
                  disabled={isAiThinking || !userInput.trim()}
                  className="px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold hover:shadow-lg transition-all disabled:opacity-50"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showConversationPractice) {
    const currentConversation = conversationDialogues[0];
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 p-4">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => {
              setShowConversationPractice(false);
              setConversationStep(0);
              setUserResponse('');
              setConversationFeedback('');
            }}
            className="mb-6 flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>

          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{currentConversation.scene}</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{currentConversation.title}</h2>
              <div className="flex items-center justify-center gap-2">
                {currentConversation.dialogue.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-2 rounded-full transition-all ${
                      idx === conversationStep ? 'w-8 bg-purple-500' : 'w-2 bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {currentConversation.dialogue.slice(0, conversationStep + 1).map((line, idx) => (
                <div
                  key={idx}
                  className={`flex ${line.speaker === 'You' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-md p-4 rounded-2xl ${
                      line.speaker === 'You'
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <p className="font-bold text-sm mb-1">{line.speaker}</p>
                    <p className="text-lg font-bold mb-1">{line.urhobo}</p>
                    <p className="text-sm opacity-90">{line.english}</p>
                  </div>
                </div>
              ))}
            </div>

            {conversationStep < currentConversation.dialogue.length && 
             currentConversation.dialogue[conversationStep].shouldSay && (
              <div className="bg-gradient-to-r from-orange-100 to-pink-100 rounded-2xl p-6">
                <p className="text-sm text-gray-600 mb-2">Your turn to speak:</p>
                <p className="text-2xl font-bold text-orange-600 mb-1">
                  {currentConversation.dialogue[conversationStep].urhobo}
                </p>
                <p className="text-gray-700 mb-4">
                  {currentConversation.dialogue[conversationStep].english}
                </p>
                
                <input
                  type="text"
                  value={userResponse}
                  onChange={(e) => setUserResponse(e.target.value)}
                  placeholder="Type the Urhobo phrase..."
                  className="w-full p-4 rounded-xl border-2 border-orange-300 focus:border-orange-500 outline-none mb-4"
                />
                
                <div className="flex gap-3">
                  <button
                    onClick={handleConversationResponse}
                    className="flex-1 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold hover:shadow-lg transition-all"
                  >
                    Submit Response
                  </button>
                  <button
                    onClick={handleRecordPronunciation}
                    disabled={isRecording}
                    className={`px-6 py-3 rounded-xl font-bold transition-all ${
                      isRecording
                        ? 'bg-red-500 text-white animate-pulse'
                        : 'bg-white border-2 border-purple-500 text-purple-600 hover:bg-purple-50'
                    }`}
                  >
                    <Mic className="w-5 h-5" />
                  </button>
                </div>
                
                {conversationFeedback && (
                  <p className={`mt-4 text-center font-bold text-lg ${
                    conversationFeedback.includes('✅') ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {conversationFeedback}
                  </p>
                )}
              </div>
            )}

            {pronunciationScore && (
              <div className="mt-4 p-6 bg-green-100 rounded-2xl text-center animate-bounce">
                <p className="text-2xl font-bold text-green-600">
                  🎉 Pronunciation Score: {pronunciationScore}%
                </p>
                <p className="text-green-700">+{pronunciationScore} points earned!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (showLearningModule) {
    const lesson = lessons[currentLesson];
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => {
              setShowLearningModule(false);
              setCurrentLesson(0);
              setLessonProgress(0);
            }}
            className="mb-6 flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>

          <div className="bg-white rounded-3xl p-8 shadow-2xl mb-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">{lesson.title}</h2>
                <p className="text-gray-600">{lesson.description}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Duration</p>
                <p className="text-2xl font-bold text-orange-600">{lesson.duration}</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Progress</span>
                <span className="text-sm font-bold text-orange-600">{lessonProgress}%</span>
              </div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-500"
                  style={{ width: `${lessonProgress}%` }}
                />
              </div>
            </div>

            <div className="grid gap-4">
              {lesson.content.map((word, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-2xl p-6 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex-1">
                      <p className="text-3xl font-bold text-orange-600 mb-2">{word.urhobo}</p>
                      <p className="text-xl text-gray-700 mb-1">{word.english}</p>
                      <p className="text-sm text-gray-500 italic">/{word.pronunciation}/</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={handlePlayPronunciation}
                        className="p-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full transition-all hover:scale-110"
                      >
                        <Volume2 className="w-6 h-6" />
                      </button>
                      <button
                        onClick={() => handleAIVoiceAnalysis(word)}
                        disabled={isRecording || isAiThinking}
                        className={`p-4 rounded-full transition-all ${
                          isRecording
                            ? 'bg-red-500 text-white animate-pulse'
                            : 'bg-purple-500 hover:bg-purple-600 text-white hover:scale-110'
                        }`}
                      >
                        <Mic className="w-6 h-6" />
                      </button>
                    </div>
                  </div>
                  {selectedWord?.urhobo === word.urhobo && aiVoiceFeedback && (
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 border-2 border-green-300">
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-2xl font-bold text-green-600">
                          Score: {aiVoiceFeedback.score}%
                        </p>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${
                                i < Math.floor(aiVoiceFeedback.score / 20)
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700 mb-3">{aiVoiceFeedback.feedback}</p>
                      {aiVoiceFeedback.tips.length > 0 && (
                        <div className="space-y-1 mb-3">
                          <p className="font-bold text-sm text-gray-900">💡 Tips:</p>
                          {aiVoiceFeedback.tips.map((tip, i) => (
                            <p key={i} className="text-sm text-gray-600">• {tip}</p>
                          ))}
                        </div>
                      )}
                      <p className="text-purple-600 font-medium">✨ {aiVoiceFeedback.encouragement}</p>
                    </div>
                  )}
                  {isAiThinking && selectedWord?.urhobo === word.urhobo && (
                    <div className="bg-blue-50 rounded-xl p-4 text-center">
                      <div className="flex justify-center gap-2 mb-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
                        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                      <p className="text-sm text-blue-600 font-medium">AI analyzing your pronunciation...</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                if (lessonProgress < 100) {
                  setLessonProgress(100);
                  setUserPoints(prev => prev + 50);
                }
              }}
              className="w-full mt-6 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-bold text-lg hover:shadow-xl transition-all"
            >
              {lessonProgress === 100 ? '✓ Lesson Complete!' : 'Mark as Complete (+50 pts)'}
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {lessons.map((l, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentLesson(idx);
                  setLessonProgress(0);
                }}
                className={`p-4 rounded-2xl text-left transition-all ${
                  idx === currentLesson
                    ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg'
                    : 'bg-white text-gray-900 hover:shadow-lg'
                }`}
              >
                <p className="font-bold mb-1">{l.title}</p>
                <p className={`text-sm ${idx === currentLesson ? 'text-orange-100' : 'text-gray-500'}`}>
                  {l.duration}
                </p>
              </button>
            ))}
          </div>

          {/* Urhobo Pride Section */}
          <div className="mt-8 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded-3xl p-8 text-center text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">🎉 Urhobo Wadooo! 🎉</h3>
            <div className="space-y-2 text-xl font-bold">
              <p>Urhobo Ọvuọvo</p>
              <p>Urhobo mena Ọvuọvo</p>
              <p>Urhobo avware na Ọvuọvo</p>
              <p className="text-4xl animate-pulse">Iyeeeeeee!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 font-sans">
      {/* Enhanced Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg animate-pulse">
                Ụ
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Urhobo Encyclopedia</h1>
                <p className="text-xs text-gray-600 flex items-center gap-1">
                  <Zap className="w-3 h-3 text-yellow-500" />
                  {streakDays} day streak
                </p>
              </div>
            </div>

            {/* Desktop Search */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className={`relative w-full transition-all ${isSearchFocused ? 'scale-105' : ''}`}>
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search words, culture, history..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                />
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              {/* Notification Bell */}
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="relative p-2 hover:bg-gray-100 rounded-full transition-all"
                >
                  <MessageCircle className="w-6 h-6 text-gray-700" />
                  {notifications.filter(n => !n.read).length > 0 && (
                    <div className="absolute top-0 right-0 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {notifications.filter(n => !n.read).length}
                    </div>
                  )}
                </button>

                {/* Notification Dropdown */}
                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-96 bg-white rounded-2xl shadow-2xl border-2 border-gray-200 max-h-96 overflow-y-auto z-50">
                    <div className="p-4 border-b flex items-center justify-between sticky top-0 bg-white">
                      <h3 className="font-bold text-gray-900">Notifications</h3>
                      <button
                        onClick={clearAllNotifications}
                        className="text-xs text-orange-600 hover:text-orange-700"
                      >
                        Clear All
                      </button>
                    </div>
                    {notifications.length === 0 ? (
                      <div className="p-8 text-center text-gray-500">
                        <MessageCircle className="w-12 h-12 mx-auto mb-2 opacity-30" />
                        <p>No notifications</p>
                      </div>
                    ) : (
                      <div className="divide-y">
                        {notifications.map((notif) => (
                          <div
                            key={notif.id}
                            onClick={() => markNotificationRead(notif.id)}
                            className={`p-4 cursor-pointer transition-all ${
                              notif.read ? 'bg-white' : 'bg-blue-50 hover:bg-blue-100'
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                notif.type === 'achievement' ? 'bg-yellow-100' :
                                notif.type === 'group' ? 'bg-green-100' :
                                notif.type === 'reminder' ? 'bg-orange-100' : 'bg-blue-100'
                              }`}>
                                {notif.type === 'achievement' ? '🏆' :
                                 notif.type === 'group' ? '👥' :
                                 notif.type === 'reminder' ? '⏰' : '👋'}
                              </div>
                              <div className="flex-1">
                                <p className="font-bold text-gray-900 text-sm">{notif.title}</p>
                                <p className="text-gray-600 text-sm">{notif.message}</p>
                                <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
                              </div>
                              {!notif.read && (
                                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Subscription Badge */}
              <div className={`px-4 py-2 rounded-full font-bold text-sm ${
                userSubscription === 'lifetime' ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white' :
                userSubscription === 'premium' ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white' :
                userSubscription === 'basic' ? 'bg-blue-500 text-white' :
                'bg-gray-200 text-gray-700'
              }`}>
                {subscriptionPlans[userSubscription].name}
                {userSubscription !== 'free' && userSubscription !== 'lifetime' && subscriptionExpiry && (
                  <span className="ml-2 opacity-75">
                    · {Math.ceil((subscriptionExpiry - new Date()) / (1000 * 60 * 60 * 24))} days
                  </span>
                )}
              </div>

              <button
                onClick={() => setOfflineMode(!offlineMode)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                  offlineMode
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {offlineMode ? '✓' : '○'} Offline
              </button>
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-full text-white">
                <Trophy className="w-4 h-4" />
                <span className="font-bold">{userPoints} pts</span>
              </div>
              <button 
                onClick={() => setShowSubscriptionModal(true)}
                className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full hover:shadow-lg transition-all hover:scale-105 font-bold"
              >
                {userSubscription === 'free' ? 'Upgrade' : 'Manage Plan'}
              </button>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Hero */}
            <div className="lg:col-span-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 rounded-full text-orange-700 font-medium text-sm">
                <Star className="w-4 h-4 fill-current" />
                10,000+ active learners this week
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Discover the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 animate-pulse">Living</span> Heritage of Urhobo
              </h2>
              <p className="text-xl text-gray-600">
                Interactive platform connecting past and present. Learn language, explore culture, earn badges, and join a thriving community.
              </p>
              
              {/* Action Buttons */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
                <button
                  onClick={() => setShowLearningModule(true)}
                  className="p-6 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-2xl hover:shadow-2xl transition-all hover:scale-105"
                >
                  <BookOpen className="w-8 h-8 mb-2 mx-auto" />
                  <p className="font-bold text-lg">Learn</p>
                  <p className="text-sm text-blue-100">Lessons</p>
                </button>
                <button
                  onClick={() => {
                    if (checkFeatureAccess('ai_tutor_unlimited')) {
                      setShowAITutor(true);
                    }
                  }}
                  className="p-6 bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-2xl hover:shadow-2xl transition-all hover:scale-105 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 bg-yellow-400 text-purple-900 text-xs font-bold px-2 py-1 rounded-bl-lg">
                    AI
                  </div>
                  <div className="text-4xl mb-2">🤖</div>
                  <p className="font-bold text-lg">Tutor</p>
                  <p className="text-sm text-purple-100">Chat</p>
                  {userSubscription === 'free' && (
                    <div className="absolute bottom-2 right-2 text-xs bg-white/20 px-2 py-1 rounded">
                      3/day
                    </div>
                  )}
                </button>
                <button
                  onClick={() => setShowConversationPractice(true)}
                  className="p-6 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl hover:shadow-2xl transition-all hover:scale-105"
                >
                  <MessageCircle className="w-8 h-8 mb-2 mx-auto" />
                  <p className="font-bold text-lg">Practice</p>
                  <p className="text-sm text-green-100">Talk</p>
                </button>
                <button
                  onClick={() => setShowProgressDashboard(true)}
                  className="p-6 bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-2xl hover:shadow-2xl transition-all hover:scale-105"
                >
                  <Trophy className="w-8 h-8 mb-2 mx-auto" />
                  <p className="font-bold text-lg">Progress</p>
                  <p className="text-sm text-orange-100">Stats</p>
                </button>
                <button
                  onClick={() => setShowCulturalContent(true)}
                  className="p-6 bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-2xl hover:shadow-2xl transition-all hover:scale-105"
                >
                  <div className="text-4xl mb-2">📚</div>
                  <p className="font-bold text-lg">Stories</p>
                  <p className="text-sm text-amber-100">Read</p>
                </button>
                <button
                  onClick={() => {
                    if (checkFeatureAccess('videos')) {
                      setShowVideoLibrary(true);
                    }
                  }}
                  className="p-6 bg-gradient-to-br from-red-500 to-pink-600 text-white rounded-2xl hover:shadow-2xl transition-all hover:scale-105 relative"
                >
                  <div className="text-4xl mb-2">🎬</div>
                  <p className="font-bold text-lg">Videos</p>
                  <p className="text-sm text-red-100">Watch</p>
                  {!['basic', 'premium', 'lifetime'].includes(userSubscription) && (
                    <div className="absolute top-2 right-2 text-xs bg-yellow-400 text-gray-900 px-2 py-1 rounded font-bold">
                      PRO
                    </div>
                  )}
                </button>
                <button
                  onClick={() => {
                    if (checkFeatureAccess('3d_artifacts')) {
                      setShow3DArtifact(true);
                      setSelectedArtifact(1);
                    }
                  }}
                  className="p-6 bg-gradient-to-br from-purple-600 to-indigo-700 text-white rounded-2xl hover:shadow-2xl transition-all hover:scale-105 relative"
                >
                  <div className="text-4xl mb-2">🏺</div>
                  <p className="font-bold text-lg">Artifacts</p>
                  <p className="text-sm text-purple-100">3D View</p>
                  {!['premium', 'lifetime'].includes(userSubscription) && (
                    <div className="absolute top-2 right-2 text-xs bg-yellow-400 text-gray-900 px-2 py-1 rounded font-bold">
                      PREMIUM
                    </div>
                  )}
                </button>
                <button
                  onClick={() => {
                    if (checkFeatureAccess('group_sessions')) {
                      setShowGroupSession(true);
                    }
                  }}
                  className="p-6 bg-gradient-to-br from-teal-500 to-cyan-600 text-white rounded-2xl hover:shadow-2xl transition-all hover:scale-105 relative"
                >
                  <Users className="w-8 h-8 mb-2 mx-auto" />
                  <p className="font-bold text-lg">Group</p>
                  <p className="text-sm text-teal-100">Live</p>
                  {userSubscription === 'free' && (
                    <div className="absolute top-2 right-2 text-xs bg-yellow-400 text-gray-900 px-2 py-1 rounded font-bold">
                      PRO
                    </div>
                  )}
                </button>
                <button
                  onClick={() => {
                    if (checkFeatureAccess('certification')) {
                      setShowCertification(true);
                    }
                  }}
                  className="p-6 bg-gradient-to-br from-yellow-500 to-amber-600 text-white rounded-2xl hover:shadow-2xl transition-all hover:scale-105 relative"
                >
                  <Award className="w-8 h-8 mb-2 mx-auto" />
                  <p className="font-bold text-lg">Certify</p>
                  <p className="text-sm text-yellow-100">Exam</p>
                  {!['premium', 'lifetime'].includes(userSubscription) && (
                    <div className="absolute top-2 right-2 text-xs bg-white/90 text-gray-900 px-2 py-1 rounded font-bold">
                      PREMIUM
                    </div>
                  )}
                </button>
                <button
                  onClick={() => setShowTeacherDashboard(true)}
                  className="p-6 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-2xl hover:shadow-2xl transition-all hover:scale-105"
                >
                  <div className="text-4xl mb-2">👨‍🏫</div>
                  <p className="font-bold text-lg">Teacher</p>
                  <p className="text-sm text-indigo-100">Monitor</p>
                </button>
                <button
                  onClick={() => setShowPaymentSetup(true)}
                  className="p-6 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl hover:shadow-2xl transition-all hover:scale-105 relative"
                >
                  <div className="text-4xl mb-2">💰</div>
                  <p className="font-bold text-lg">Earnings</p>
                  <p className="text-sm text-green-100">Withdraw</p>
                  {totalRevenue > 0 && (
                    <div className="absolute top-2 right-2 text-xs bg-yellow-400 text-gray-900 px-2 py-1 rounded font-bold">
                      ₦{(totalRevenue / 1000).toFixed(1)}K
                    </div>
                  )}
                </button>
              </div>

              {/* Offline Mode Banner */}
              {offlineMode && (
                <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-green-900">Offline Mode Active</p>
                      <p className="text-sm text-green-700">Continue learning without internet</p>
                    </div>
                    <button
                      onClick={() => handleDownloadContent('All Lessons')}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-all"
                    >
                      Download More
                    </button>
                  </div>
                </div>
              )}

              {/* Interactive Word Card */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-orange-100 hover:border-orange-300 transition-all">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-orange-500" />
                    Word of the Day
                  </h3>
                  <div className="flex gap-2">
                    {wordsOfDay.map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-2 rounded-full transition-all ${
                          idx === currentWordIndex ? 'w-8 bg-orange-500' : 'w-2 bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-end gap-4">
                    <p className="text-5xl font-bold text-orange-600">{currentWord.word}</p>
                    <button
                      onClick={() => {
                        handlePlayPronunciation();
                        handleTextToSpeech(currentWord.word);
                      }}
                      className={`p-3 rounded-full transition-all ${
                        isSpeaking ? 'bg-orange-600 scale-110 animate-pulse' : 'bg-orange-500 hover:bg-orange-600'
                      }`}
                    >
                      <Volume2 className="w-5 h-5 text-white" />
                    </button>
                  </div>
                  <p className="text-2xl text-gray-700 font-medium">{currentWord.translation}</p>
                  <p className="text-gray-500 italic">/{currentWord.pronunciation}/</p>
                  <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                    <p className="text-sm text-gray-600 mb-1">Example:</p>
                    <p className="text-lg font-medium text-gray-900">{currentWord.example}</p>
                  </div>
                  
                  <div className="flex gap-3">
                    <button 
                      onClick={() => handleLike('word')}
                      className={`flex-1 py-3 rounded-xl font-medium transition-all ${
                        likedItems.has('word')
                          ? 'bg-red-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <Heart className={`w-5 h-5 inline mr-2 ${likedItems.has('word') ? 'fill-current' : ''}`} />
                      {likedItems.has('word') ? 'Liked!' : 'Like'} (+5 pts)
                    </button>
                    <button
                      onClick={() => handleBookmark('word')}
                      className={`flex-1 py-3 rounded-xl font-medium transition-all ${
                        bookmarkedItems.has('word')
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <Bookmark className={`w-5 h-5 inline mr-2 ${bookmarkedItems.has('word') ? 'fill-current' : ''}`} />
                      {bookmarkedItems.has('word') ? 'Saved' : 'Save'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Quick Quiz */}
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Zap className="w-6 h-6" />
                  Quick Challenge
                </h3>
                <p className="text-lg mb-6">{quizQuestion.question}</p>
                <div className="grid grid-cols-2 gap-3">
                  {quizQuestion.options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleQuizAnswer(idx)}
                      disabled={showQuizResult}
                      className={`p-4 rounded-xl font-medium transition-all ${
                        showQuizResult
                          ? idx === quizQuestion.correct
                            ? 'bg-green-500 scale-105'
                            : idx === quizAnswer
                            ? 'bg-red-500'
                            : 'bg-white/20'
                          : 'bg-white/20 hover:bg-white/30 hover:scale-105'
                      }`}
                    >
                      {option}
                      {showQuizResult && idx === quizQuestion.correct && ' ✓'}
                    </button>
                  ))}
                </div>
                {showQuizResult && (
                  <p className="mt-4 text-center font-bold">
                    {quizAnswer === quizQuestion.correct ? '🎉 Correct! +10 points' : '❌ Try again!'}
                  </p>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Trending Topics */}
              <div className="bg-white rounded-3xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-orange-500" />
                  Trending Now
                </h3>
                <div className="space-y-3">
                  {trendingTopics.map((topic, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-gradient-to-r from-gray-50 to-orange-50 rounded-xl hover:shadow-md transition-all cursor-pointer group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{topic.icon}</span>
                        <div className="flex-1">
                          <p className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                            {topic.title}
                          </p>
                          <div className="flex items-center gap-3 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <Eye className="w-3 h-3" />
                              {topic.views}
                            </span>
                            <span className="text-green-600 font-medium">{topic.trend}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Events */}
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-6 text-white shadow-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Upcoming Events
                </h3>
                <div className="space-y-3">
                  {upcomingEvents.map((event, idx) => (
                    <div key={idx} className="bg-white/20 backdrop-blur rounded-xl p-4 hover:bg-white/30 transition-all cursor-pointer">
                      <p className="font-bold mb-1">{event.title}</p>
                      <div className="flex items-center justify-between text-sm">
                        <span>{event.date} • {event.time}</span>
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {event.attendees}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-3xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-green-500" />
                  Recent Activity
                </h3>
                <div className="space-y-3">
                  {recentActivity.map((activity, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-xl transition-all">
                      <span className="text-2xl">{activity.avatar}</span>
                      <div className="flex-1">
                        <p className="text-sm">
                          <span className="font-bold">{activity.user}</span>{' '}
                          <span className="text-gray-600">{activity.action}</span>{' '}
                          <span className="font-medium text-orange-600">{activity.item}</span>
                        </p>
                        <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                          <Clock className="w-3 h-3" />
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vocabulary Categories Section */}
      <section id="vocabulary-section" className="py-20 px-4 bg-gradient-to-br from-orange-100 to-pink-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Vocabulary Library</h2>
            <p className="text-xl text-gray-600">Browse words by category</p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {Object.entries(vocabularyCategories).map(([key, cat]) => (
              <button
                key={key}
                onClick={() => setActiveVocabCategory(key)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeVocabCategory === key
                    ? `bg-${cat.color}-500 text-white shadow-lg scale-110`
                    : 'bg-white text-gray-700 hover:shadow-md'
                }`}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {vocabularyCategories[activeVocabCategory].words.map((word, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-6 hover:shadow-lg transition-all group cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <p className="text-2xl font-bold text-orange-600 mb-1">{word.urhobo}</p>
                      <p className="text-lg text-gray-700">{word.english}</p>
                      <p className="text-sm text-gray-500 italic">/{word.pronunciation}/</p>
                    </div>
                    <button
                      onClick={handlePlayPronunciation}
                      className="p-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full transition-all group-hover:scale-110"
                    >
                      <Volume2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Categories */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Collections</h2>
            <p className="text-xl text-gray-600">Click to dive into any area</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                onClick={() => setActiveCategory(activeCategory === idx ? null : idx)}
                className={`bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 shadow-lg cursor-pointer group transition-all ${
                  activeCategory === idx ? 'ring-4 ring-orange-500 scale-105' : 'hover:shadow-2xl hover:-translate-y-2'
                }`}
              >
                <div className={`w-16 h-16 ${cat.color} rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                  {cat.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{cat.title}</h3>
                <p className="text-gray-600 mb-4">{cat.desc}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">{cat.items} items</span>
                  <span className="text-green-600 font-medium flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    {cat.active} active
                  </span>
                </div>
                {activeCategory === idx && (
                  <button className="w-full mt-4 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl font-medium hover:shadow-lg transition-all">
                    Explore Now →
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4">Join 10,000+ Learners Today</h2>
            <p className="text-xl mb-8 text-orange-100">Start earning points, unlock achievements, and preserve heritage</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-orange-600 rounded-full font-bold hover:shadow-xl transition-all hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-orange-600 transition-all">
                View Demo
              </button>
            </div>
            <p className="mt-6 text-sm text-orange-100">✨ First 100 users get lifetime premium free</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center text-sm">
                  Ụ
                </div>
                Urhobo Encyclopedia
              </h3>
              <p className="text-gray-400">Preserving heritage, connecting generations.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Explore</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Language</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">History</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Culture</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Community</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Forums</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Events</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Contributors</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2025 Urhobo Encyclopedia. Made with ❤️ for the Urhobo people.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UrhoboEncyclopedia;

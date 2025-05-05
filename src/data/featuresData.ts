
import { Speech, Captions, MicOff, Headphones } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface Feature {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  fullDescription: string;
  color: string;
  howItWorks: {
    title: string;
    description: string;
  }[];
  benefits: string[];
}

export const featuresData: Feature[] = [
  {
    id: "text-to-sign",
    icon: Speech,
    title: "Text-to-Sign Language Translation",
    description: "Our AI translates written stories into accurate, expressive sign language videos that children can easily understand.",
    color: "bg-purple-light text-purple-dark",
    fullDescription: "Our advanced text-to-sign language translation technology breaks down communication barriers by converting written text into fluid, natural sign language. Using state-of-the-art AI models trained on thousands of hours of sign language footage, we deliver authentic translations that capture nuance and context.",
    howItWorks: [
      {
        title: "Natural Language Processing",
        description: "Our AI analyzes text for linguistic patterns, context, and meaning using advanced NLP algorithms."
      },
      {
        title: "Semantic Mapping",
        description: "The system maps textual concepts to their equivalent sign language representations, considering grammatical structures specific to sign languages."
      },
      {
        title: "Avatar Animation",
        description: "Customizable avatars perform fluid, accurate sign language movements that follow natural signing patterns and rhythms."
      },
      {
        title: "Cultural Adaptation",
        description: "Our system accounts for regional variations in sign languages to ensure culturally appropriate translations."
      }
    ],
    benefits: [
      "Improves literacy by connecting written text to familiar sign language",
      "Provides access to stories and educational content previously unavailable in sign language",
      "Helps hearing families communicate better with deaf children through shared stories",
      "Creates a more inclusive educational environment for children with hearing impairments",
      "Continuously improves through machine learning to become more accurate over time"
    ]
  },
  {
    id: "emotion-recognition",
    icon: Headphones,
    title: "Emotion Recognition",
    description: "Advanced AI recognizes emotional cues in stories and represents them visually through our expressive avatars.",
    color: "bg-teal-light text-teal-dark",
    fullDescription: "Our emotion recognition technology analyzes text for emotional context and translates these emotions into expressive sign language. This feature ensures that children with hearing impairments don't just understand the words, but also experience the full emotional depth of stories.",
    howItWorks: [
      {
        title: "Emotional Context Analysis",
        description: "Our AI identifies emotional patterns and context within text, recognizing complex feelings and emotional transitions."
      },
      {
        title: "Facial Expression Mapping",
        description: "Avatars display a wide range of facial expressions that accurately convey emotions identified in the text."
      },
      {
        title: "Signing Intensity Adjustment",
        description: "The system modulates signing speed, size, and emphasis to match the emotional tone of the content."
      },
      {
        title: "Multimodal Feedback",
        description: "Visual cues, colors, and animations enhance emotional context beyond just facial expressions and signing."
      }
    ],
    benefits: [
      "Enhances emotional intelligence by connecting written emotional cues to visual expressions",
      "Provides a more engaging and immersive storytelling experience",
      "Helps children develop empathy and emotional awareness through stories",
      "Bridges the emotional gap that can occur when translating between languages",
      "Supports social development by improving understanding of emotional communication"
    ]
  },
  {
    id: "speech-to-text",
    icon: Captions,
    title: "Real-time Speech-to-Text",
    description: "Convert spoken words into text instantly, making conversations and storytelling sessions accessible to all children.",
    color: "bg-yellow-light text-yellow-dark",
    fullDescription: "Our real-time speech-to-text technology makes spoken language instantly accessible to children with hearing impairments by converting speech into readable text with minimal delay. This feature enables seamless participation in classroom discussions, family conversations, and storytelling sessions.",
    howItWorks: [
      {
        title: "Advanced Speech Recognition",
        description: "Using deep learning models, our system accurately recognizes speech patterns across different accents and environments."
      },
      {
        title: "Noise Filtration",
        description: "Sophisticated algorithms filter out background noise to focus on the primary speaker, even in busy environments."
      },
      {
        title: "Real-time Processing",
        description: "Low-latency processing ensures text appears almost instantly as words are spoken, enabling natural conversation flow."
      },
      {
        title: "Speaker Identification",
        description: "The system distinguishes between different speakers in group settings, making conversations easier to follow."
      }
    ],
    benefits: [
      "Enables real-time participation in classroom discussions and family conversations",
      "Provides immediate access to spoken content without specialized interpretation",
      "Supports language acquisition by connecting spoken and written language",
      "Works across multiple devices for accessibility anywhere",
      "Increases independence for children with hearing impairments in various social settings"
    ]
  },
  {
    id: "sign-avatars",
    icon: MicOff,
    title: "Sign Language Avatars",
    description: "Friendly, customizable avatars that use natural sign language movements to bring stories to life.",
    color: "bg-purple-light text-purple-dark",
    fullDescription: "Our sign language avatars are meticulously designed to deliver natural, expressive signing that captures the nuance and grammar of sign languages. Children can customize these avatars to their preferences, creating a more personal and engaging connection to stories and educational content.",
    howItWorks: [
      {
        title: "Motion Capture Technology",
        description: "Our avatars' movements are based on motion capture from native sign language users to ensure accuracy and natural flow."
      },
      {
        title: "Customization Options",
        description: "Children can personalize their avatar's appearance, including clothing, hairstyles, and physical features."
      },
      {
        title: "Linguistic Accuracy",
        description: "Avatars incorporate grammatical features specific to sign languages, including facial expressions and body positioning."
      },
      {
        title: "Continuous Learning",
        description: "Our system improves over time through machine learning, becoming more fluid and natural with increased usage."
      }
    ],
    benefits: [
      "Creates a personal connection between children and educational content",
      "Provides consistent signing quality that may be difficult to access in some areas",
      "Offers representation that children with hearing impairments can identify with",
      "Enables content scaling across multiple sign languages with high quality",
      "Adapts to different signing speeds based on the child's comprehension level"
    ]
  }
];

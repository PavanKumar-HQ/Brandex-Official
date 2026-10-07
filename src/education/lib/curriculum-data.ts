export interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface QuizQuestion {
  id: string;
  question: string;
  type: 'MULTIPLE_CHOICE' | 'TRUE_FALSE';
  options: QuizOption[];
  explanation: string;
  points: number;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  passingPercentage: number;
  timeLimitMinutes?: number;
  questions: QuizQuestion[];
}

export interface Lesson {
  id: string;
  slug: string;
  title: string;
  description: string;
  youtubeId: string;
  youtubeUrl: string;
  duration: string;
  durationSeconds: number;
  learningObjectives: string[];
  keyTakeaways: string[];
  sortOrder: number;
  status: 'PUBLISHED' | 'DRAFT' | 'REVIEW';
  thumbnailUrl?: string;
  quiz?: Quiz;
}

export interface Topic {
  id: string;
  slug: string;
  title: string;
  description: string;
  sortOrder: number;
  lessons: Lesson[];
  quiz?: Quiz;
}

export interface Chapter {
  id: string;
  slug: string;
  chapterNumber: number;
  title: string;
  description: string;
  sortOrder: number;
  topics: Topic[];
}

export interface Subject {
  id: string;
  slug: string;
  name: string;
  description: string;
  iconName: string;
  chapters: Chapter[];
}

export interface ClassLevel {
  id: string;
  slug: string;
  name: string;
  grade: string;
  description: string;
  subjects: Subject[];
}

export const CURRICULUM_DATA: ClassLevel[] = [
  {
    id: "class-6",
    slug: "class-6",
    name: "Class 6",
    grade: "6",
    description: "Karnataka State Board Syllabus for Class 6",
    subjects: [
      {
        id: "sub-6-science",
        slug: "science",
        name: "Science",
        description: "Science for Class 6 (KSEEB)",
        iconName: "FlaskConical",
        chapters: [
          {
            id: "chap-6-science-1",
            slug: "chapter-1",
            chapterNumber: 1,
            title: "Chapter 1: Science Fundamentals",
            description: "Introduction to core Science concepts for chapter 1",
            sortOrder: 1,
            topics: [
              {
                id: "top-6-science-1-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-6-science-1-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-6-science-1-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-6-science-1-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-6-science-1-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-6-science-1-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          },
          {
            id: "chap-6-science-2",
            slug: "chapter-2",
            chapterNumber: 2,
            title: "Chapter 2: Science Fundamentals",
            description: "Introduction to core Science concepts for chapter 2",
            sortOrder: 2,
            topics: [
              {
                id: "top-6-science-2-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-6-science-2-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-6-science-2-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-6-science-2-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-6-science-2-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-6-science-2-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          },
          {
            id: "chap-6-science-3",
            slug: "chapter-3",
            chapterNumber: 3,
            title: "Chapter 3: Science Fundamentals",
            description: "Introduction to core Science concepts for chapter 3",
            sortOrder: 3,
            topics: [
              {
                id: "top-6-science-3-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-6-science-3-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-6-science-3-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-6-science-3-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-6-science-3-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-6-science-3-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "sub-6-maths",
        slug: "maths",
        name: "Mathematics",
        description: "Mathematics for Class 6 (KSEEB)",
        iconName: "Calculator",
        chapters: [
          {
            id: "chap-6-maths-1",
            slug: "chapter-1",
            chapterNumber: 1,
            title: "Chapter 1: Mathematics Fundamentals",
            description: "Introduction to core Mathematics concepts for chapter 1",
            sortOrder: 1,
            topics: [
              {
                id: "top-6-maths-1-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-6-maths-1-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-6-maths-1-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Mathematics Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-6-maths-1-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-6-maths-1-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-6-maths-1-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Mathematics Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          },
          {
            id: "chap-6-maths-2",
            slug: "chapter-2",
            chapterNumber: 2,
            title: "Chapter 2: Mathematics Fundamentals",
            description: "Introduction to core Mathematics concepts for chapter 2",
            sortOrder: 2,
            topics: [
              {
                id: "top-6-maths-2-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-6-maths-2-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-6-maths-2-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Mathematics Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-6-maths-2-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-6-maths-2-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-6-maths-2-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Mathematics Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          },
          {
            id: "chap-6-maths-3",
            slug: "chapter-3",
            chapterNumber: 3,
            title: "Chapter 3: Mathematics Fundamentals",
            description: "Introduction to core Mathematics concepts for chapter 3",
            sortOrder: 3,
            topics: [
              {
                id: "top-6-maths-3-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-6-maths-3-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-6-maths-3-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Mathematics Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-6-maths-3-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-6-maths-3-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-6-maths-3-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Mathematics Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "sub-6-social",
        slug: "social",
        name: "Social Science",
        description: "Social Science for Class 6 (KSEEB)",
        iconName: "Globe",
        chapters: [
          {
            id: "chap-6-social-1",
            slug: "chapter-1",
            chapterNumber: 1,
            title: "Chapter 1: Social Science Fundamentals",
            description: "Introduction to core Social Science concepts for chapter 1",
            sortOrder: 1,
            topics: [
              {
                id: "top-6-social-1-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-6-social-1-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-6-social-1-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Social Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-6-social-1-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-6-social-1-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-6-social-1-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Social Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          },
          {
            id: "chap-6-social-2",
            slug: "chapter-2",
            chapterNumber: 2,
            title: "Chapter 2: Social Science Fundamentals",
            description: "Introduction to core Social Science concepts for chapter 2",
            sortOrder: 2,
            topics: [
              {
                id: "top-6-social-2-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-6-social-2-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-6-social-2-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Social Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-6-social-2-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-6-social-2-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-6-social-2-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Social Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          },
          {
            id: "chap-6-social-3",
            slug: "chapter-3",
            chapterNumber: 3,
            title: "Chapter 3: Social Science Fundamentals",
            description: "Introduction to core Social Science concepts for chapter 3",
            sortOrder: 3,
            topics: [
              {
                id: "top-6-social-3-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-6-social-3-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-6-social-3-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Social Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-6-social-3-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-6-social-3-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-6-social-3-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Social Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "sub-6-english",
        slug: "english",
        name: "English",
        description: "English for Class 6 (KSEEB)",
        iconName: "BookOpen",
        chapters: [
          {
            id: "chap-6-english-1",
            slug: "chapter-1",
            chapterNumber: 1,
            title: "Chapter 1: English Fundamentals",
            description: "Introduction to core English concepts for chapter 1",
            sortOrder: 1,
            topics: [
              {
                id: "top-6-english-1-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-6-english-1-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-6-english-1-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "English Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-6-english-1-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-6-english-1-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-6-english-1-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "English Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          },
          {
            id: "chap-6-english-2",
            slug: "chapter-2",
            chapterNumber: 2,
            title: "Chapter 2: English Fundamentals",
            description: "Introduction to core English concepts for chapter 2",
            sortOrder: 2,
            topics: [
              {
                id: "top-6-english-2-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-6-english-2-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-6-english-2-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "English Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-6-english-2-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-6-english-2-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-6-english-2-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "English Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          },
          {
            id: "chap-6-english-3",
            slug: "chapter-3",
            chapterNumber: 3,
            title: "Chapter 3: English Fundamentals",
            description: "Introduction to core English concepts for chapter 3",
            sortOrder: 3,
            topics: [
              {
                id: "top-6-english-3-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-6-english-3-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-6-english-3-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "English Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-6-english-3-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-6-english-3-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-6-english-3-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "English Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "class-7",
    slug: "class-7",
    name: "Class 7",
    grade: "7",
    description: "Karnataka State Board Syllabus for Class 7",
    subjects: [
      {
        id: "sub-7-science",
        slug: "science",
        name: "Science",
        description: "Science for Class 7 (KSEEB)",
        iconName: "FlaskConical",
        chapters: [
          {
            id: "chap-7-science-1",
            slug: "chapter-1",
            chapterNumber: 1,
            title: "Chapter 1: Science Fundamentals",
            description: "Introduction to core Science concepts for chapter 1",
            sortOrder: 1,
            topics: [
              {
                id: "top-7-science-1-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-7-science-1-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-7-science-1-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-7-science-1-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-7-science-1-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-7-science-1-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          },
          {
            id: "chap-7-science-2",
            slug: "chapter-2",
            chapterNumber: 2,
            title: "Chapter 2: Science Fundamentals",
            description: "Introduction to core Science concepts for chapter 2",
            sortOrder: 2,
            topics: [
              {
                id: "top-7-science-2-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-7-science-2-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-7-science-2-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-7-science-2-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-7-science-2-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-7-science-2-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          },
          {
            id: "chap-7-science-3",
            slug: "chapter-3",
            chapterNumber: 3,
            title: "Chapter 3: Science Fundamentals",
            description: "Introduction to core Science concepts for chapter 3",
            sortOrder: 3,
            topics: [
              {
                id: "top-7-science-3-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-7-science-3-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-7-science-3-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-7-science-3-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-7-science-3-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-7-science-3-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "sub-7-maths",
        slug: "maths",
        name: "Mathematics",
        description: "Mathematics for Class 7 (KSEEB)",
        iconName: "Calculator",
        chapters: [
          {
            id: "chap-7-maths-1",
            slug: "chapter-1",
            chapterNumber: 1,
            title: "Chapter 1: Mathematics Fundamentals",
            description: "Introduction to core Mathematics concepts for chapter 1",
            sortOrder: 1,
            topics: [
              {
                id: "top-7-maths-1-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-7-maths-1-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-7-maths-1-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Mathematics Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-7-maths-1-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-7-maths-1-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-7-maths-1-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Mathematics Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          },
          {
            id: "chap-7-maths-2",
            slug: "chapter-2",
            chapterNumber: 2,
            title: "Chapter 2: Mathematics Fundamentals",
            description: "Introduction to core Mathematics concepts for chapter 2",
            sortOrder: 2,
            topics: [
              {
                id: "top-7-maths-2-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-7-maths-2-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-7-maths-2-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Mathematics Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-7-maths-2-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-7-maths-2-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-7-maths-2-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Mathematics Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          },
          {
            id: "chap-7-maths-3",
            slug: "chapter-3",
            chapterNumber: 3,
            title: "Chapter 3: Mathematics Fundamentals",
            description: "Introduction to core Mathematics concepts for chapter 3",
            sortOrder: 3,
            topics: [
              {
                id: "top-7-maths-3-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-7-maths-3-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-7-maths-3-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Mathematics Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-7-maths-3-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-7-maths-3-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-7-maths-3-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Mathematics Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "sub-7-social",
        slug: "social",
        name: "Social Science",
        description: "Social Science for Class 7 (KSEEB)",
        iconName: "Globe",
        chapters: [
          {
            id: "chap-7-social-1",
            slug: "chapter-1",
            chapterNumber: 1,
            title: "Chapter 1: Social Science Fundamentals",
            description: "Introduction to core Social Science concepts for chapter 1",
            sortOrder: 1,
            topics: [
              {
                id: "top-7-social-1-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-7-social-1-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-7-social-1-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Social Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-7-social-1-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-7-social-1-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-7-social-1-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Social Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          },
          {
            id: "chap-7-social-2",
            slug: "chapter-2",
            chapterNumber: 2,
            title: "Chapter 2: Social Science Fundamentals",
            description: "Introduction to core Social Science concepts for chapter 2",
            sortOrder: 2,
            topics: [
              {
                id: "top-7-social-2-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-7-social-2-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-7-social-2-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Social Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-7-social-2-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-7-social-2-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-7-social-2-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Social Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          },
          {
            id: "chap-7-social-3",
            slug: "chapter-3",
            chapterNumber: 3,
            title: "Chapter 3: Social Science Fundamentals",
            description: "Introduction to core Social Science concepts for chapter 3",
            sortOrder: 3,
            topics: [
              {
                id: "top-7-social-3-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-7-social-3-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-7-social-3-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Social Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-7-social-3-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-7-social-3-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-7-social-3-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Social Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "sub-7-english",
        slug: "english",
        name: "English",
        description: "English for Class 7 (KSEEB)",
        iconName: "BookOpen",
        chapters: [
          {
            id: "chap-7-english-1",
            slug: "chapter-1",
            chapterNumber: 1,
            title: "Chapter 1: English Fundamentals",
            description: "Introduction to core English concepts for chapter 1",
            sortOrder: 1,
            topics: [
              {
                id: "top-7-english-1-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-7-english-1-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-7-english-1-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "English Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-7-english-1-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-7-english-1-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-7-english-1-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "English Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          },
          {
            id: "chap-7-english-2",
            slug: "chapter-2",
            chapterNumber: 2,
            title: "Chapter 2: English Fundamentals",
            description: "Introduction to core English concepts for chapter 2",
            sortOrder: 2,
            topics: [
              {
                id: "top-7-english-2-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-7-english-2-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-7-english-2-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "English Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-7-english-2-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-7-english-2-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-7-english-2-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "English Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          },
          {
            id: "chap-7-english-3",
            slug: "chapter-3",
            chapterNumber: 3,
            title: "Chapter 3: English Fundamentals",
            description: "Introduction to core English concepts for chapter 3",
            sortOrder: 3,
            topics: [
              {
                id: "top-7-english-3-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-7-english-3-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-7-english-3-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "English Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-7-english-3-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-7-english-3-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-7-english-3-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "English Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "class-8",
    slug: "class-8",
    name: "Class 8",
    grade: "8",
    description: "Karnataka State Board Syllabus for Class 8",
    subjects: [
      {
        id: "sub-8-science",
        slug: "science",
        name: "Science",
        description: "Science for Class 8 (KSEEB)",
        iconName: "FlaskConical",
        chapters: [
          {
            id: "chap-8-science-1",
            slug: "chapter-1",
            chapterNumber: 1,
            title: "Chapter 1: Science Fundamentals",
            description: "Introduction to core Science concepts for chapter 1",
            sortOrder: 1,
            topics: [
              {
                id: "top-8-science-1-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-8-science-1-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-8-science-1-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-8-science-1-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-8-science-1-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-8-science-1-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          },
          {
            id: "chap-8-science-2",
            slug: "chapter-2",
            chapterNumber: 2,
            title: "Chapter 2: Science Fundamentals",
            description: "Introduction to core Science concepts for chapter 2",
            sortOrder: 2,
            topics: [
              {
                id: "top-8-science-2-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-8-science-2-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-8-science-2-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-8-science-2-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-8-science-2-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-8-science-2-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          },
          {
            id: "chap-8-science-3",
            slug: "chapter-3",
            chapterNumber: 3,
            title: "Chapter 3: Science Fundamentals",
            description: "Introduction to core Science concepts for chapter 3",
            sortOrder: 3,
            topics: [
              {
                id: "top-8-science-3-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-8-science-3-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-8-science-3-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-8-science-3-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-8-science-3-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-8-science-3-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "sub-8-maths",
        slug: "maths",
        name: "Mathematics",
        description: "Mathematics for Class 8 (KSEEB)",
        iconName: "Calculator",
        chapters: [
          {
            id: "chap-8-maths-1",
            slug: "chapter-1",
            chapterNumber: 1,
            title: "Chapter 1: Mathematics Fundamentals",
            description: "Introduction to core Mathematics concepts for chapter 1",
            sortOrder: 1,
            topics: [
              {
                id: "top-8-maths-1-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-8-maths-1-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-8-maths-1-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Mathematics Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-8-maths-1-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-8-maths-1-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-8-maths-1-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Mathematics Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          },
          {
            id: "chap-8-maths-2",
            slug: "chapter-2",
            chapterNumber: 2,
            title: "Chapter 2: Mathematics Fundamentals",
            description: "Introduction to core Mathematics concepts for chapter 2",
            sortOrder: 2,
            topics: [
              {
                id: "top-8-maths-2-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-8-maths-2-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-8-maths-2-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Mathematics Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-8-maths-2-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-8-maths-2-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-8-maths-2-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Mathematics Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          },
          {
            id: "chap-8-maths-3",
            slug: "chapter-3",
            chapterNumber: 3,
            title: "Chapter 3: Mathematics Fundamentals",
            description: "Introduction to core Mathematics concepts for chapter 3",
            sortOrder: 3,
            topics: [
              {
                id: "top-8-maths-3-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-8-maths-3-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-8-maths-3-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Mathematics Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-8-maths-3-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-8-maths-3-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-8-maths-3-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Mathematics Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "sub-8-social",
        slug: "social",
        name: "Social Science",
        description: "Social Science for Class 8 (KSEEB)",
        iconName: "Globe",
        chapters: [
          {
            id: "chap-8-social-1",
            slug: "chapter-1",
            chapterNumber: 1,
            title: "Chapter 1: Social Science Fundamentals",
            description: "Introduction to core Social Science concepts for chapter 1",
            sortOrder: 1,
            topics: [
              {
                id: "top-8-social-1-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-8-social-1-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-8-social-1-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Social Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-8-social-1-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-8-social-1-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-8-social-1-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Social Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          },
          {
            id: "chap-8-social-2",
            slug: "chapter-2",
            chapterNumber: 2,
            title: "Chapter 2: Social Science Fundamentals",
            description: "Introduction to core Social Science concepts for chapter 2",
            sortOrder: 2,
            topics: [
              {
                id: "top-8-social-2-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-8-social-2-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-8-social-2-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Social Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-8-social-2-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-8-social-2-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-8-social-2-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Social Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          },
          {
            id: "chap-8-social-3",
            slug: "chapter-3",
            chapterNumber: 3,
            title: "Chapter 3: Social Science Fundamentals",
            description: "Introduction to core Social Science concepts for chapter 3",
            sortOrder: 3,
            topics: [
              {
                id: "top-8-social-3-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-8-social-3-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-8-social-3-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Social Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-8-social-3-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-8-social-3-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-8-social-3-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Social Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "sub-8-english",
        slug: "english",
        name: "English",
        description: "English for Class 8 (KSEEB)",
        iconName: "BookOpen",
        chapters: [
          {
            id: "chap-8-english-1",
            slug: "chapter-1",
            chapterNumber: 1,
            title: "Chapter 1: English Fundamentals",
            description: "Introduction to core English concepts for chapter 1",
            sortOrder: 1,
            topics: [
              {
                id: "top-8-english-1-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-8-english-1-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-8-english-1-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "English Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-8-english-1-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-8-english-1-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-8-english-1-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "English Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          },
          {
            id: "chap-8-english-2",
            slug: "chapter-2",
            chapterNumber: 2,
            title: "Chapter 2: English Fundamentals",
            description: "Introduction to core English concepts for chapter 2",
            sortOrder: 2,
            topics: [
              {
                id: "top-8-english-2-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-8-english-2-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-8-english-2-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "English Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-8-english-2-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-8-english-2-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-8-english-2-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "English Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          },
          {
            id: "chap-8-english-3",
            slug: "chapter-3",
            chapterNumber: 3,
            title: "Chapter 3: English Fundamentals",
            description: "Introduction to core English concepts for chapter 3",
            sortOrder: 3,
            topics: [
              {
                id: "top-8-english-3-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-8-english-3-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-8-english-3-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "English Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-8-english-3-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-8-english-3-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-8-english-3-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "English Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "class-9",
    slug: "class-9",
    name: "Class 9",
    grade: "9",
    description: "Karnataka State Board Syllabus for Class 9",
    subjects: [
      {
        id: "sub-9-science",
        slug: "science",
        name: "Science",
        description: "Science for Class 9 (KSEEB)",
        iconName: "FlaskConical",
        chapters: [
          {
            id: "chap-9-science-1",
            slug: "chapter-1",
            chapterNumber: 1,
            title: "Chapter 1: Science Fundamentals",
            description: "Introduction to core Science concepts for chapter 1",
            sortOrder: 1,
            topics: [
              {
                id: "top-9-science-1-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-9-science-1-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-9-science-1-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-9-science-1-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-9-science-1-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-9-science-1-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          },
          {
            id: "chap-9-science-2",
            slug: "chapter-2",
            chapterNumber: 2,
            title: "Chapter 2: Science Fundamentals",
            description: "Introduction to core Science concepts for chapter 2",
            sortOrder: 2,
            topics: [
              {
                id: "top-9-science-2-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-9-science-2-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-9-science-2-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-9-science-2-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-9-science-2-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-9-science-2-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          },
          {
            id: "chap-9-science-3",
            slug: "chapter-3",
            chapterNumber: 3,
            title: "Chapter 3: Science Fundamentals",
            description: "Introduction to core Science concepts for chapter 3",
            sortOrder: 3,
            topics: [
              {
                id: "top-9-science-3-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-9-science-3-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-9-science-3-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-9-science-3-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-9-science-3-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-9-science-3-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "sub-9-maths",
        slug: "maths",
        name: "Mathematics",
        description: "Mathematics for Class 9 (KSEEB)",
        iconName: "Calculator",
        chapters: [
          {
            id: "chap-9-maths-1",
            slug: "chapter-1",
            chapterNumber: 1,
            title: "Chapter 1: Mathematics Fundamentals",
            description: "Introduction to core Mathematics concepts for chapter 1",
            sortOrder: 1,
            topics: [
              {
                id: "top-9-maths-1-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-9-maths-1-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-9-maths-1-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Mathematics Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-9-maths-1-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-9-maths-1-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-9-maths-1-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Mathematics Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          },
          {
            id: "chap-9-maths-2",
            slug: "chapter-2",
            chapterNumber: 2,
            title: "Chapter 2: Mathematics Fundamentals",
            description: "Introduction to core Mathematics concepts for chapter 2",
            sortOrder: 2,
            topics: [
              {
                id: "top-9-maths-2-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-9-maths-2-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-9-maths-2-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Mathematics Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-9-maths-2-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-9-maths-2-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-9-maths-2-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Mathematics Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          },
          {
            id: "chap-9-maths-3",
            slug: "chapter-3",
            chapterNumber: 3,
            title: "Chapter 3: Mathematics Fundamentals",
            description: "Introduction to core Mathematics concepts for chapter 3",
            sortOrder: 3,
            topics: [
              {
                id: "top-9-maths-3-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-9-maths-3-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-9-maths-3-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Mathematics Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-9-maths-3-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-9-maths-3-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-9-maths-3-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Mathematics Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "sub-9-social",
        slug: "social",
        name: "Social Science",
        description: "Social Science for Class 9 (KSEEB)",
        iconName: "Globe",
        chapters: [
          {
            id: "chap-9-social-1",
            slug: "chapter-1",
            chapterNumber: 1,
            title: "Chapter 1: Social Science Fundamentals",
            description: "Introduction to core Social Science concepts for chapter 1",
            sortOrder: 1,
            topics: [
              {
                id: "top-9-social-1-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-9-social-1-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-9-social-1-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Social Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-9-social-1-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-9-social-1-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-9-social-1-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Social Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          },
          {
            id: "chap-9-social-2",
            slug: "chapter-2",
            chapterNumber: 2,
            title: "Chapter 2: Social Science Fundamentals",
            description: "Introduction to core Social Science concepts for chapter 2",
            sortOrder: 2,
            topics: [
              {
                id: "top-9-social-2-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-9-social-2-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-9-social-2-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Social Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-9-social-2-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-9-social-2-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-9-social-2-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Social Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          },
          {
            id: "chap-9-social-3",
            slug: "chapter-3",
            chapterNumber: 3,
            title: "Chapter 3: Social Science Fundamentals",
            description: "Introduction to core Social Science concepts for chapter 3",
            sortOrder: 3,
            topics: [
              {
                id: "top-9-social-3-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-9-social-3-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-9-social-3-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Social Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-9-social-3-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-9-social-3-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-9-social-3-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Social Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "sub-9-english",
        slug: "english",
        name: "English",
        description: "English for Class 9 (KSEEB)",
        iconName: "BookOpen",
        chapters: [
          {
            id: "chap-9-english-1",
            slug: "chapter-1",
            chapterNumber: 1,
            title: "Chapter 1: English Fundamentals",
            description: "Introduction to core English concepts for chapter 1",
            sortOrder: 1,
            topics: [
              {
                id: "top-9-english-1-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-9-english-1-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-9-english-1-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "English Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-9-english-1-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-9-english-1-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-9-english-1-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "English Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          },
          {
            id: "chap-9-english-2",
            slug: "chapter-2",
            chapterNumber: 2,
            title: "Chapter 2: English Fundamentals",
            description: "Introduction to core English concepts for chapter 2",
            sortOrder: 2,
            topics: [
              {
                id: "top-9-english-2-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-9-english-2-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-9-english-2-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "English Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-9-english-2-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-9-english-2-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-9-english-2-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "English Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          },
          {
            id: "chap-9-english-3",
            slug: "chapter-3",
            chapterNumber: 3,
            title: "Chapter 3: English Fundamentals",
            description: "Introduction to core English concepts for chapter 3",
            sortOrder: 3,
            topics: [
              {
                id: "top-9-english-3-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-9-english-3-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-9-english-3-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "English Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-9-english-3-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-9-english-3-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-9-english-3-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "English Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "class-10",
    slug: "class-10",
    name: "Class 10",
    grade: "10",
    description: "Karnataka State Board Syllabus for Class 10",
    subjects: [
      {
        id: "sub-10-science",
        slug: "science",
        name: "Science",
        description: "Science for Class 10 (KSEEB)",
        iconName: "FlaskConical",
        chapters: [
          {
            id: "chap-10-science-1",
            slug: "chapter-1",
            chapterNumber: 1,
            title: "Chapter 1: Science Fundamentals",
            description: "Introduction to core Science concepts for chapter 1",
            sortOrder: 1,
            topics: [
              {
                id: "top-10-science-1-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-10-science-1-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-10-science-1-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-10-science-1-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-10-science-1-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-10-science-1-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          },
          {
            id: "chap-10-science-2",
            slug: "chapter-2",
            chapterNumber: 2,
            title: "Chapter 2: Science Fundamentals",
            description: "Introduction to core Science concepts for chapter 2",
            sortOrder: 2,
            topics: [
              {
                id: "top-10-science-2-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-10-science-2-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-10-science-2-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-10-science-2-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-10-science-2-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-10-science-2-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          },
          {
            id: "chap-10-science-3",
            slug: "chapter-3",
            chapterNumber: 3,
            title: "Chapter 3: Science Fundamentals",
            description: "Introduction to core Science concepts for chapter 3",
            sortOrder: 3,
            topics: [
              {
                id: "top-10-science-3-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-10-science-3-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-10-science-3-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-10-science-3-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-10-science-3-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-10-science-3-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Core scientific concepts and textbook definitions","Visual diagram explanations and experiment methods","Karnataka State Board solved exercise questions","Key exam takeaways and formative practice check"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "sub-10-maths",
        slug: "maths",
        name: "Mathematics",
        description: "Mathematics for Class 10 (KSEEB)",
        iconName: "Calculator",
        chapters: [
          {
            id: "chap-10-maths-1",
            slug: "chapter-1",
            chapterNumber: 1,
            title: "Chapter 1: Mathematics Fundamentals",
            description: "Introduction to core Mathematics concepts for chapter 1",
            sortOrder: 1,
            topics: [
              {
                id: "top-10-maths-1-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-10-maths-1-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-10-maths-1-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Mathematics Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-10-maths-1-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-10-maths-1-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-10-maths-1-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Mathematics Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          },
          {
            id: "chap-10-maths-2",
            slug: "chapter-2",
            chapterNumber: 2,
            title: "Chapter 2: Mathematics Fundamentals",
            description: "Introduction to core Mathematics concepts for chapter 2",
            sortOrder: 2,
            topics: [
              {
                id: "top-10-maths-2-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-10-maths-2-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-10-maths-2-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Mathematics Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-10-maths-2-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-10-maths-2-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-10-maths-2-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Mathematics Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          },
          {
            id: "chap-10-maths-3",
            slug: "chapter-3",
            chapterNumber: 3,
            title: "Chapter 3: Mathematics Fundamentals",
            description: "Introduction to core Mathematics concepts for chapter 3",
            sortOrder: 3,
            topics: [
              {
                id: "top-10-maths-3-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-10-maths-3-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-10-maths-3-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Mathematics Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-10-maths-3-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-10-maths-3-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-10-maths-3-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding Mathematics",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Formula derivations and fundamental properties","Step-by-step solved textbook problem sets","Application techniques for complex numericals","Speed solving tips and board exam model questions"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Mathematics Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "sub-10-social",
        slug: "social",
        name: "Social Science",
        description: "Social Science for Class 10 (KSEEB)",
        iconName: "Globe",
        chapters: [
          {
            id: "chap-10-social-1",
            slug: "chapter-1",
            chapterNumber: 1,
            title: "Chapter 1: Social Science Fundamentals",
            description: "Introduction to core Social Science concepts for chapter 1",
            sortOrder: 1,
            topics: [
              {
                id: "top-10-social-1-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-10-social-1-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-10-social-1-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Social Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-10-social-1-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-10-social-1-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-10-social-1-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Social Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          },
          {
            id: "chap-10-social-2",
            slug: "chapter-2",
            chapterNumber: 2,
            title: "Chapter 2: Social Science Fundamentals",
            description: "Introduction to core Social Science concepts for chapter 2",
            sortOrder: 2,
            topics: [
              {
                id: "top-10-social-2-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-10-social-2-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-10-social-2-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Social Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-10-social-2-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-10-social-2-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-10-social-2-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Social Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          },
          {
            id: "chap-10-social-3",
            slug: "chapter-3",
            chapterNumber: 3,
            title: "Chapter 3: Social Science Fundamentals",
            description: "Introduction to core Social Science concepts for chapter 3",
            sortOrder: 3,
            topics: [
              {
                id: "top-10-social-3-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-10-social-3-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-10-social-3-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Social Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-10-social-3-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-10-social-3-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-10-social-3-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding Social Science",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Historical timelines, events, and geographic analysis","Civic structures, governance, and economic principles","Map reading, key dates, and important personalities","Board question patterns and chapter revision notes"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "Social Science Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "sub-10-english",
        slug: "english",
        name: "English",
        description: "English for Class 10 (KSEEB)",
        iconName: "BookOpen",
        chapters: [
          {
            id: "chap-10-english-1",
            slug: "chapter-1",
            chapterNumber: 1,
            title: "Chapter 1: English Fundamentals",
            description: "Introduction to core English concepts for chapter 1",
            sortOrder: 1,
            topics: [
              {
                id: "top-10-english-1-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-10-english-1-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-10-english-1-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "English Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-10-english-1-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-10-english-1-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-10-english-1-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "English Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          },
          {
            id: "chap-10-english-2",
            slug: "chapter-2",
            chapterNumber: 2,
            title: "Chapter 2: English Fundamentals",
            description: "Introduction to core English concepts for chapter 2",
            sortOrder: 2,
            topics: [
              {
                id: "top-10-english-2-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-10-english-2-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-10-english-2-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "English Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-10-english-2-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-10-english-2-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-10-english-2-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "English Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          },
          {
            id: "chap-10-english-3",
            slug: "chapter-3",
            chapterNumber: 3,
            title: "Chapter 3: English Fundamentals",
            description: "Introduction to core English concepts for chapter 3",
            sortOrder: 3,
            topics: [
              {
                id: "top-10-english-3-1",
                slug: "topic-1",
                title: "Topic 1",
                description: "Deep dive into topic 1",
                sortOrder: 1,
                lessons: [
                  {
                    id: "les-10-english-3-1-1",
                    slug: "lesson-1",
                    title: "Lesson 1.1: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-10-english-3-1-2",
                    slug: "lesson-2",
                    title: "Lesson 1.2: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "English Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              },
              {
                id: "top-10-english-3-2",
                slug: "topic-2",
                title: "Topic 2",
                description: "Deep dive into topic 2",
                sortOrder: 2,
                lessons: [
                  {
                    id: "les-10-english-3-2-1",
                    slug: "lesson-1",
                    title: "Lesson 2.1: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 1,
                    status: "PUBLISHED"
                  },
                  {
                    id: "les-10-english-3-2-2",
                    slug: "lesson-2",
                    title: "Lesson 2.2: Understanding English",
                    description: "A comprehensive lesson covering Karnataka State syllabus guidelines.",
                    youtubeId: "1aFw5r_pS1g", // Placeholder
                    youtubeUrl: "https://www.youtube.com/watch?v=1aFw5r_pS1g",
                    duration: "10:00",
                    durationSeconds: 600,
                    learningObjectives: ["Textbook prose/poetry comprehension and analysis","Grammar principles, syntax, and active vocabulary","Summary points, central themes, and character sketches","Reading & writing exercises aligned with KSEEB"],
                    keyTakeaways: ["Key point 1", "Key point 2"],
                    sortOrder: 2,
                    status: "PUBLISHED",
                    quiz: {
        id: "quiz-${Date.now()}-${Math.random()}",
        title: "English Knowledge Check",
        description: "Test your understanding of the concepts covered in this lesson.",
        passingPercentage: 70,
        questions: [
          {
            id: "q1-${Date.now()}",
            type: "MULTIPLE_CHOICE",
            question: "What is the primary concept covered in this lesson?",
            options: [
              { id: "o1", text: "Concept A", isCorrect: true },
              { id: "o2", text: "Concept B", isCorrect: false },
              { id: "o3", text: "Concept C", isCorrect: false },
              { id: "o4", text: "Concept D", isCorrect: false }
            ],
            explanation: "Concept A is the foundation of this topic.",
            points: 10
          }
        ]
      }
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
];


export function getLessonBySlug(slug: string) {
  for (const cls of CURRICULUM_DATA) {
    for (const sub of cls.subjects) {
      for (const ch of sub.chapters) {
        for (const top of ch.topics) {
          const lesson = top.lessons.find(l => l.slug === slug);
          if (lesson) {
            return { lesson, topic: top, chapter: ch, subject: sub, classLevel: cls };
          }
        }
      }
    }
  }
  return null;
}

export function searchCurriculum(query: string) {
  const results = [];
  const q = query.toLowerCase();
  
  for (const cls of CURRICULUM_DATA) {
    for (const sub of cls.subjects) {
      if (sub.name.toLowerCase().includes(q)) {
        results.push({
          type: 'subject',
          classTitle: cls.name,
          subjectTitle: sub.name,
          title: sub.name,
          description: sub.description,
          path: `/studio/${cls.slug}/${sub.slug}`
        });
      }
      for (const ch of sub.chapters) {
        if (ch.title.toLowerCase().includes(q)) {
          results.push({
            type: 'chapter',
            classTitle: cls.name,
            subjectTitle: sub.name,
            title: ch.title,
            description: ch.description,
            path: `/studio/${cls.slug}/${sub.slug}`
          });
        }
        for (const top of ch.topics) {
          for (const l of top.lessons) {
            if (l.title.toLowerCase().includes(q) || l.description.toLowerCase().includes(q)) {
              results.push({
                type: 'lesson',
                classTitle: cls.name,
                subjectTitle: sub.name,
                title: l.title,
                description: l.description,
                path: `/lesson/${l.slug}`,
                duration: l.duration,
                hasQuiz: !!l.quiz
              });
            }
          }
        }
      }
    }
  }
  return results;
}

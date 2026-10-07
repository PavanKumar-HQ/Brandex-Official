import { CURRICULUM_DATA } from './curriculum-data';

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

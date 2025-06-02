import React, { useState } from 'react';
import DashboardLayout from '../../components/ui/DashboardLayout';
import { Sparkles, FileText, Download } from 'lucide-react';

export default function AIAssistant() {
  const [templateType, setTemplateType] = useState('learning_plan');
  const [topic, setTopic] = useState('');
  const [learningOutcomes, setLearningOutcomes] = useState('');
  const [duration, setDuration] = useState('');
  const [level, setLevel] = useState('beginner');
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsGenerating(true);
    setGeneratedContent('');
    
    // Mock delay to simulate AI generation
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const outcomesList = learningOutcomes.split('\n').filter(Boolean);
    
    // Generate mock content based on template type
    let content = '';
    
    if (templateType === 'learning_plan') {
      content = `# Learning Plan: ${topic}

## Course Information
- **Subject**: ${topic}
- **Level**: ${level.charAt(0).toUpperCase() + level.slice(1)}
- **Duration**: ${duration}

## Learning Outcomes
${outcomesList.map((outcome, index) => `${index + 1}. ${outcome}`).join('\n')}

## Course Outline
1. Introduction to ${topic}
   - Overview of key concepts
   - Historical context and significance
   
2. Core Principles and Methodologies
   - Fundamental theories
   - Practical applications
   
3. Advanced Concepts
   - In-depth analysis
   - Case studies and examples
   
4. Assessment and Evaluation
   - Continuous assessment strategies
   - Final examination requirements

## Resources and Materials
- Required textbooks
- Supplementary reading materials
- Online resources and tools

## Teaching Methodologies
- Lectures and presentations
- Group discussions and activities
- Practical demonstrations
- Independent study assignments`;
    } else if (templateType === 'session_plan') {
      content = `# Session Plan: ${topic}

## Session Information
- **Topic**: ${topic}
- **Level**: ${level.charAt(0).toUpperCase() + level.slice(1)}
- **Duration**: ${duration}

## Learning Outcomes
${outcomesList.map((outcome, index) => `${index + 1}. ${outcome}`).join('\n')}

## Session Structure

### Introduction (15 minutes)
- Warm-up activity
- Review of previous knowledge
- Introduction to today's topic

### Main Activities (30 minutes)
- Presentation of key concepts
- Guided practice and examples
- Group work and discussion

### Application (20 minutes)
- Independent practice
- Problem-solving exercises
- Real-world applications

### Conclusion (10 minutes)
- Summary of key points
- Q&A session
- Preview of next session

## Materials and Resources
- Presentation slides
- Handouts and worksheets
- Equipment and tools needed

## Assessment Strategy
- Formative assessment during activities
- Exit tickets for quick evaluation
- Follow-up assignments`;
    } else if (templateType === 'lesson_notes') {
      content = `# Lesson Notes: ${topic}

## Overview
- **Subject**: ${topic}
- **Level**: ${level.charAt(0).toUpperCase() + level.slice(1)}
- **Duration**: ${duration}

## Learning Outcomes
${outcomesList.map((outcome, index) => `${index + 1}. ${outcome}`).join('\n')}

## Key Concepts

### Definition and Context
${topic} refers to the systematic study of [specific subject matter]. It encompasses various principles including [principle 1], [principle 2], and [principle 3].

### Historical Development
The development of ${topic} can be traced back to [historical context]. Key contributors include [contributor 1], [contributor 2], and [contributor 3].

### Fundamental Principles
1. **Principle One**: Explanation and examples
2. **Principle Two**: Explanation and examples
3. **Principle Three**: Explanation and examples

### Practical Applications
- Application in [field 1]
- Application in [field 2]
- Modern innovations and developments

## Common Misconceptions
- Misconception 1: Clarification
- Misconception 2: Clarification

## Teaching Notes
- Emphasize the connection between [concept 1] and [concept 2]
- Use visual aids to demonstrate [specific process]
- Encourage critical thinking through questioning strategies

## Further Reading
- [Resource 1]
- [Resource 2]
- [Resource 3]`;
    } else if (templateType === 'record_of_work') {
      content = `# Record of Work: ${topic}

## Course Information
- **Subject**: ${topic}
- **Level**: ${level.charAt(0).toUpperCase() + level.slice(1)}
- **Duration**: ${duration}

## Learning Outcomes Covered
${outcomesList.map((outcome, index) => `${index + 1}. ${outcome}`).join('\n')}

## Work Completed

### Week 1
- **Monday**: Introduction to ${topic}
  - Key concepts covered: [concept 1], [concept 2]
  - Activities: Lecture, group discussion
  - Resources used: Textbook chapters 1-2, handouts

- **Wednesday**: Fundamental Principles
  - Key concepts covered: [concept 3], [concept 4]
  - Activities: Demonstration, practice exercises
  - Resources used: Worksheets, online resources

- **Friday**: Practical Applications
  - Key concepts covered: [concept 5], [concept 6]
  - Activities: Group project, presentations
  - Resources used: Case studies, project materials

### Week 2
- **Monday**: Advanced Concepts
  - Key concepts covered: [concept 7], [concept 8]
  - Activities: Advanced problem-solving, discussion
  - Resources used: Textbook chapters 3-4, research papers

- **Wednesday**: Review and Reinforcement
  - Activities: Review exercises, quiz
  - Resources used: Review materials, practice tests

- **Friday**: Assessment
  - Formal assessment conducted
  - Assessment type: [exam/project/presentation]

## Student Progress
- General class progress: [summary of overall progress]
- Areas of strength: [identified strengths]
- Areas needing improvement: [areas for development]

## Notes for Future Teaching
- [Observation 1]
- [Observation 2]
- [Recommendation for improvement]`;
    }
    
    setGeneratedContent(content);
    setIsGenerating(false);
  };

  const handleDownload = () => {
    if (!generatedContent) return;
    
    const blob = new Blob([generatedContent], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${templateType.replace('_', '-')}-${topic.replace(/\s+/g, '-').toLowerCase()}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-800">AI Template Generator</h3>
          </div>
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="templateType" className="block text-sm font-medium text-gray-700 mb-1">
                  Template Type
                </label>
                <select
                  id="templateType"
                  value={templateType}
                  onChange={(e) => setTemplateType(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="learning_plan">Learning Plan</option>
                  <option value="session_plan">Session Plan</option>
                  <option value="lesson_notes">Lesson Notes</option>
                  <option value="record_of_work">Record of Work</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-1">
                  Topic
                </label>
                <input
                  id="topic"
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., Introduction to Algebra"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="learningOutcomes" className="block text-sm font-medium text-gray-700 mb-1">
                  Learning Outcomes (one per line)
                </label>
                <textarea
                  id="learningOutcomes"
                  value={learningOutcomes}
                  onChange={(e) => setLearningOutcomes(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g.,&#10;Understand basic algebraic concepts&#10;Solve linear equations&#10;Apply algebraic principles to real-world problems"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">
                  Duration
                </label>
                <input
                  id="duration"
                  type="text"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., 2 hours, 1 week, 3 months"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="level" className="block text-sm font-medium text-gray-700 mb-1">
                  Level
                </label>
                <select
                  id="level"
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isGenerating}
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  {isGenerating ? 'Generating...' : 'Generate Template'}
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-800">Generated Template</h3>
            {generatedContent && (
              <button
                onClick={handleDownload}
                className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                <Download className="mr-1 h-4 w-4" />
                Download
              </button>
            )}
          </div>
          <div className="p-6">
            {isGenerating ? (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
                <p className="text-gray-600">Generating your template...</p>
              </div>
            ) : generatedContent ? (
              <div className="prose max-w-none">
                <pre className="bg-gray-50 p-4 rounded-md overflow-auto text-sm font-mono">
                  {generatedContent}
                </pre>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <FileText className="h-16 w-16 text-gray-300 mb-4" />
                <h3 className="text-lg font-medium text-gray-700 mb-2">No Template Generated Yet</h3>
                <p className="text-gray-500 max-w-sm">
                  Fill out the form and click "Generate Template" to create your AI-powered educational template.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
// DailyChallengesInfographic.jsx
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { Clock, Brain, BookOpen, Users, Heart } from 'lucide-react';

const timelineEvents = [
  { time: '6:00 AM', event: 'Family Care', stress: 'medium', color: '#FCD34D' },
  { time: '8:00 AM', event: 'Classes', stress: 'high', color: '#EF4444' },
  { time: '10:00 AM', event: 'Study Group', stress: 'low', color: '#34D399' },
  { time: '12:00 PM', event: 'Translation Duties', stress: 'high', color: '#EF4444' },
  { time: '2:00 PM', event: 'Academic Advising', stress: 'medium', color: '#FCD34D' },
  { time: '4:00 PM', event: 'Work', stress: 'high', color: '#EF4444' },
  { time: '7:00 PM', event: 'Homework', stress: 'medium', color: '#FCD34D' },
  { time: '9:00 PM', event: 'Family Support', stress: 'medium', color: '#FCD34D' }
];

const mentalHealthSymptoms = [
  { symptom: 'Depression/Low Mood', percentage: 35 },
  { symptom: 'Anxiety/Panic', percentage: 25 },
  { symptom: 'Sleep Disruption', percentage: 15 },
  { symptom: 'Social Withdrawal', percentage: 10 },
  { symptom: 'Concentration Issues', percentage: 10 },
  { symptom: 'Physical Symptoms', percentage: 5 }
];

const DailyChallengesInfographic = () => {
  return (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-2">
          Daily Challenges of Undocumented Highschool Students
        </h2>
        <p className="text-gray-600 mb-6">
          Tracking how undocumented students balance academic excellence with family responsibilities and immigration stress.
        </p>
        <div className="bg-yellow-50 p-4 rounded-lg mb-8">
  <h3 className="font-semibold mb-2">Key Issue</h3>
  <p>The 24-hour responsibilities of undocumented students create a cycle of chronic stress. Academic institutions must recognize and accommodate these unique challenges through flexible policies and targeted support systems.</p>
</div>

        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4">Daily Timeline</h3>
          <div className="relative">
            <div className="absolute top-1/2 w-full h-1 bg-gray-200"></div>
            <div className="relative flex justify-between">
              {timelineEvents.map((event, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className="w-4 h-4 rounded-full mb-2"
                    style={{ backgroundColor: event.color }}
                  ></div>
                  <span className="text-sm font-medium">{event.time}</span>
                  <span className="text-xs mt-1">{event.event}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-4 mt-4 justify-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#34D399]"></div>
                <span className="text-sm">Low Stress</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FCD34D]"></div>
                <span className="text-sm">Medium Stress</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#EF4444]"></div>
                <span className="text-sm">High Stress</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4">Common Mental Health Symptoms</h3>
          <div className="w-full h-[400px]"> {/* Chart container */}
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={mentalHealthSymptoms}
                margin={{ top: 20, right: 20, bottom: 70, left: 40 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="symptom"
                  angle={-45}
                  textAnchor="end"
                  interval={0}
                  height={90}
                />
                <YAxis
                  label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft' }}
                />
                <Tooltip />
                <Bar dataKey="percentage" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-yellow-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Academic Pressure Points</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-yellow-600" />
                <span>Balancing work and studies</span>
              </li>
              <li className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-yellow-600" />
                <span>Meeting academic deadlines</span>
              </li>
              <li className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-yellow-600" />
                <span>Language barriers in coursework</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Family Dynamics</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Users className="w-5 h-5 text-green-600" />
                <span>Primary family translator</span>
              </li>
              <li className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-green-600" />
                <span>Supporting younger siblings</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-green-600" />
                <span>Managing family responsibilities</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyChallengesInfographic;

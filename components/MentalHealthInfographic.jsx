// MentalHealthInfographic.jsx
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
import { Brain, BookOpen, Users, Heart } from 'lucide-react';

const mentalHealthStats = [
  { name: 'Major Depression', percentage: 14.4 },
  { name: 'Anxiety Disorder', percentage: 6.6 },
  { name: 'PTSD', percentage: 3.0 },
  { name: 'Alcohol Use', percentage: 8.6 }
];

const MentalHealthInfographic = () => {
  return (
    <div className="p-6">
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-2">
          Mental Health Crisis Among Undocumented Latino/a Students
        </h2>
        <p className="text-gray-600 mb-6">
          Examining the intersection of academic pressure and immigration-related mental health challenges faced by high-achieving undocumented students in mixed-status families.
        </p>

        <div className="bg-blue-50 p-4 rounded-lg mb-8">
          <h3 className="font-semibold mb-2">Position Statement</h3>
          <p>
            Undocumented students should not have to choose between academic excellence and mental wellbeing. Current systems force an impossible balance between educational achievement and psychological health, creating unsustainable pressure on students already managing complex family dynamics.
          </p>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg mb-8">
          <h3 className="font-semibold mb-2">Key Research Finding</h3>
          <p className="text-sm">
            Trauma experienced at different stages of migration is associated with distinctive mental health outcomes, with premigration trauma significantly linked to anxiety disorders and post-migration trauma associated with PTSD symptoms. - Cleary et al. (2018)
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Mental Health Statistics</h3>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={mentalHealthStats}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis
                  label={{
                    value: 'Percentage (%)',
                    angle: -90,
                    position: 'insideLeft',
                  }}
                />
                <Tooltip />
                <Bar dataKey="percentage" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="p-4 bg-blue-50 rounded-lg flex flex-col items-center">
            <Brain className="w-8 h-8 text-blue-600 mb-2" />
            <span className="text-center">Immigration Status Anxiety</span>
          </div>
          <div className="p-4 bg-red-50 rounded-lg flex flex-col items-center">
            <BookOpen className="w-8 h-8 text-red-600 mb-2" />
            <span className="text-center">Academic Pressure</span>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg flex flex-col items-center">
            <Users className="w-8 h-8 text-yellow-600 mb-2" />
            <span className="text-center">Family Obligations</span>
          </div>
          <div className="p-4 bg-green-50 rounded-lg flex flex-col items-center">
            <Heart className="w-8 h-8 text-green-600 mb-2" />
            <span className="text-center">Cultural Identity</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-semibold mb-2">Academic Impact</h3>
            <ul className="space-y-1">
              <li>• Missed classes for family duties</li>
              <li>• Concentration difficulties</li>
              <li>• Limited participation</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg border-l-4 border-red-500">
            <h3 className="font-semibold mb-2">Mental Health Impact</h3>
            <ul className="space-y-1">
              <li>• 82% report trauma exposure</li>
              <li>• Chronic stress and anxiety</li>
              <li>• Depression symptoms</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg border-l-4 border-yellow-500">
            <h3 className="font-semibold mb-2">Social Impact</h3>
            <ul className="space-y-1">
              <li>• Isolation from peers</li>
              <li>• Limited engagement</li>
              <li>• Identity challenges</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg border-l-4 border-green-500">
            <h3 className="font-semibold mb-2">Family Impact</h3>
            <ul className="space-y-1">
              <li>• Translation responsibilities</li>
              <li>• Financial support roles</li>
              <li>• Cultural navigation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentalHealthInfographic;

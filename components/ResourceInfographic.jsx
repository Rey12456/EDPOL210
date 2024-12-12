// ResourceInfographic.jsx
import React from 'react';
import { ExternalLink, AlertTriangle, Heart, Brain } from 'lucide-react';

const ResourceInfographic = () => {
 return (
   <div className="p-6">
     <div className="bg-white rounded-lg shadow-lg p-6">
       <h2 className="text-2xl font-bold mb-2">Support Systems & Crisis Prevention</h2>
       <p className="text-gray-600 mb-6">Resources and strategies for addressing the hidden mental health crisis among undocumented Latino/a students in highschool and higher education.</p>
       <div className="bg-green-50 p-4 rounded-lg mb-8">
  <h3 className="font-semibold mb-2">Call to Action</h3>
  <p>Highschools must expand beyond traditional mental health services to provide culturally competent, immigration-informed support. Mental health resources should be as accessible as academic resources for undocumented students.</p>
</div>

       <div className="grid grid-cols-3 gap-6 mb-12">
         <a href="https://www.nami.org" target="_blank" rel="noopener noreferrer" 
            className="p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
           <div className="flex items-center gap-2 mb-3">
             <ExternalLink className="w-5 h-5 text-blue-600" />
             <h3 className="font-semibold">NAMI</h3>
           </div>
           <p className="text-sm">Mental health education and support programs</p>
         </a>

         <a href="https://www.mentalhealthfirstaid.org" target="_blank" rel="noopener noreferrer"
            className="p-6 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
           <div className="flex items-center gap-2 mb-3">
             <Heart className="w-5 h-5 text-green-600" />
             <h3 className="font-semibold">Mental Health First Aid</h3>
           </div>
           <p className="text-sm">Teen-focused mental health resources and training</p>
         </a>

         <a href="https://stevefund.org" target="_blank" rel="noopener noreferrer"
            className="p-6 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
           <div className="flex items-center gap-2 mb-3">
             <Brain className="w-5 h-5 text-purple-600" />
             <h3 className="font-semibold">The Steve Fund</h3>
           </div>
           <p className="text-sm">Mental health support for students of color</p>
         </a>
       </div>

       <div className="mb-12 bg-red-50 p-6 rounded-lg">
         <div className="flex items-center gap-2 mb-4">
           <AlertTriangle className="w-6 h-6 text-red-600" />
           <h3 className="text-lg font-semibold">Warning Signs</h3>
         </div>
         <div className="grid grid-cols-3 gap-4">
           <div>
             <h4 className="font-medium mb-2">Behavioral Signs</h4>
             <ul className="space-y-2 text-sm">
               <li>• Social withdrawal</li>
               <li>• Academic decline</li>
               <li>• Sleep changes</li>
               <li>• Increased irritability</li>
             </ul>
           </div>
           <div>
             <h4 className="font-medium mb-2">Emotional Signs</h4>
             <ul className="space-y-2 text-sm">
               <li>• Persistent sadness</li>
               <li>• Heightened anxiety</li>
               <li>• Feelings of hopelessness</li>
               <li>• Emotional numbness</li>
             </ul>
           </div>
           <div>
             <h4 className="font-medium mb-2">Physical Signs</h4>
             <ul className="space-y-2 text-sm">
               <li>• Fatigue</li>
               <li>• Headaches</li>
               <li>• Loss of appetite</li>
               <li>• Physical tension</li>
             </ul>
           </div>
         </div>
       </div>

       <div className="grid grid-cols-2 gap-6">
         <div className="bg-blue-50 p-6  rounded-lg">
          <h3 className="font-semibold mb-4">Individual Support Strategies</h3>
          <ul className="space-y-2">
            <li>• Connect with cultural support groups</li>
            <li>• Practice stress management techniques</li>
            <li>• Maintain regular sleep schedule</li>
            <li>• Set realistic academic goals</li>
            <li>• Build a support network</li>
            <li>• Access counseling services</li>
            <li>• Join student organizations</li>
          </ul>
        </div>
        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="font-semibold mb-4">Campus Support Services</h3>
          <ul className="space-y-2">
            <li>• Academic counseling</li> 
            <li>• Mental health resources</li>
            <li>• Multicultural student centers</li>
            <li>• Peer mentoring programs</li>
            <li>• Legal assistance services</li>
            <li>• Financial aid guidance</li>
            <li>• Student advocacy groups</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 bg-yellow-50 p-6 rounded-lg">
        <h3 className="font-semibold mb-4">Crisis Resources</h3>
        <ul className="space-y-2">
          <li>• National Crisis Hotline: 988</li>
          <li>• Crisis Text Line: Text HOME to 741741</li>
          <li>• Campus Emergency Services</li>
          <li>• Student Health Center</li>
          <li>• Local Mental Health Services</li>
        </ul>
      </div>

    </div>
  </div>
);
};

export default ResourceInfographic;
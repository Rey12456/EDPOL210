import React from 'react';
import { ExternalLink, AlertTriangle, Heart, Brain } from 'lucide-react';

const ResourceInfographic = () => {
 return (
   <div className="p-6">
     <div className="bg-white rounded-lg shadow-lg p-6">
       <h2 className="text-2xl font-bold mb-8">Mental Health Resources & Support</h2>

       {/* Resource Links */}
       <div className="grid grid-cols-3 gap-6 mb-12">
         <a href="https://www.nami.org" target="_blank" rel="noopener noreferrer" 
            className="p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
           <div className="flex items-center gap-2 mb-3">
             <ExternalLink className="w-5 h-5 text-blue-600" />
             <h3 className="font-semibold">NAMI</h3>
           </div>
           <p className="text-sm"> Program offers online resources specifically for teens, including a hotline you can call 800-950-NAMI for someone to talk to</p>
         </a>

         <a href="https://www.mentalhealthfirstaid.org" target="_blank" rel="noopener noreferrer"
            className="p-6 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
           <div className="flex items-center gap-2 mb-3">
             <Heart className="w-5 h-5 text-green-600" />
             <h3 className="font-semibold">Mental Health First Aid</h3>
           </div>
           <p className="text-sm">Foundation for students in grades 10 – 12. The program seeks to help students identify, understand, and respond to signs of mental health and substance use challenges among their friends and peers</p>
         </a>

         
<a href="https://stevefund.org" target="_blank" rel="noopener noreferrer"
  className="p-6 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
 <div className="flex items-center gap-2 mb-3">
   <Brain className="w-5 h-5 text-purple-600" />
   <h3 className="font-semibold">The Steve Fund</h3>
 </div>
 <p className="text-sm">For young people making the transition from highschool to college seeks to help promote equity and mental wellness however they can. 

</p>
</a>
       </div>

       {/* Warning Signs */}
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

       {/* Support Strategies */}
       <div className="grid grid-cols-2 gap-6">
         <div className="bg-blue-50 p-6 rounded-lg">
           <h3 className="font-semibold mb-4">Individual Support Strategies</h3>
           <ul className="space-y-2">
             <li>• Connect with cultural support groups</li>
             <li>• Practice stress management techniques</li>
             <li>• Maintain regular sleep schedule</li>
             <li>• Set realistic academic goals</li>
             <li>• Build a support network</li>
           </ul>
         </div>
         <div className="bg-green-50 p-6 rounded-lg">
           <h3 className="font-semibold mb-4">Community Support Strategies</h3>
           <ul className="space-y-2">
             <li>• Join peer support programs</li>
             <li>• Engage with cultural organizations</li>
             <li>• Participate in group counseling</li>
             <li>• Connect with mentors</li>
             <li>• Access academic support services</li>
           </ul>
         </div>
       </div>
     </div>
   </div>
 );
};

export default ResourceInfographic;
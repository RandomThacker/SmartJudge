import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function RecommendationPage() {
  const [recommendations, setRecommendations] = useState([]);
  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await axios.post('http://172.17.0.3:5000/recommend',{
          "user_id": 39,
          "item_id": 10
      });
      console.log(response);
        setRecommendations(response.data); // Assuming response.data contains recommendations
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      }
    };

    fetchRecommendations(); // Call the function
  }, []); // Empty dependency array means this effect runs only once after initial render

  return (
    <div>
      <h1>RecommendationPage</h1>
      <ul>
        {recommendations.map((recommendation, index) => (
          <li key={index}>{recommendation}</li>
        ))}
      </ul>
    </div>
  );
}

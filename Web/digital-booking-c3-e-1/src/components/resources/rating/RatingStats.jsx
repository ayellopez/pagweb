import React, { useEffect, useState } from "react";
import styles from "./RatingStats.module.css";

const RatingStats = () => {
  const [averageRating, setAverageRating] = useState(0);
  const [totalRatings, setTotalRatings] = useState(0);

  useEffect(() => {
    generateRandomStats();
  }, []);

  const generateRandomStats = () => {
    // const randomAverage = Math.random() * 5;
    const randomAverage = Math.random() * (5 - 4) + 4; 
    const randomTotal = Math.floor(Math.random() * 100); 
    setAverageRating(randomAverage.toFixed(1));
    setTotalRatings(randomTotal);
  };

  return (
    <div className={styles.ratingStats}>
      <div className={styles.ratingStatsItem}>
        <div className={styles.ratingStatsAverage}>
          <span className={styles.ratingStatsIcon}>&#9733;</span>
          <span className={styles.ratingStatsRating}>
            {averageRating}
          </span>
        </div>
        <div className={styles.ratingStatsTotal}>
          {totalRatings} valoraciones
        </div>
      </div>
    </div>
  );
};

export default RatingStats;
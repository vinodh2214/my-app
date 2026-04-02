'use client'
import React from 'react'
import { useState } from 'react';

const page = () => {

    const players = ["Pavan", "Bhanu", "Prabhu", "Satya", "Vinodh"];
const ranks = [1, 2, 3, 4, 5];

const pointsMap = {
  1: 200,
  2: 190,
  3: 180,
  4: 170,
  5: 160,
};
 
   const [selections, setSelections] = useState(
    players.map((p) => ({ player: p, rank: "" }))
  );

  const [resultCard, setResultCard] = useState(null);

  const handleRankChange = (index, value) => {
    const updated = [...selections];
    updated[index].rank = Number(value);
    setSelections(updated);
  };

  const handleSubmit = () => {
    // Check all selected
    if (selections.some((s) => !s.rank)) {
      alert("Please assign all ranks ❌");
      return;
    }

    // Check duplicate ranks
    const ranksUsed = selections.map((s) => s.rank);
    const uniqueRanks = new Set(ranksUsed);

    if (uniqueRanks.size !== 5) {
      alert("Ranks must be unique ❌");
      return;
    }

    // Build result
    const result = selections
      .map((s) => ({
        ...s,
        points: pointsMap[s.rank],
      }))
      .sort((a, b) => a.rank - b.rank);

    setResultCard(result);
  };

  return (
    <div style={styles.container}>
      <h1>🏏 Match Status - Bulk Ranking</h1>

      {/* PLAYER LIST */}
      <div style={styles.list}>
        {selections.map((item, index) => (
          <div key={index} style={styles.row}>
            <span>{item.player}</span>

            <select
              value={item.rank}
              onChange={(e) => handleRankChange(index, e.target.value)}
              style={styles.select}
            >
              <option value="">Select Rank</option>
              {ranks.map((r) => (
                <option key={r} value={r}>
                  Rank {r}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      {/* SUBMIT */}
      <button onClick={handleSubmit} style={styles.button}>
        Generate Scorecard
      </button>

      {/* RESULT CARD */}
      {resultCard && (
        <div style={styles.card}>
          <h3>🏆 Final Scorecard</h3>

          {resultCard.map((r, i) => (
            <p key={i}>
              {r.player} : {r.points}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

/* STYLES */
const styles = {
  container: {
    padding: "40px",
    textAlign: "center",
    background: "#0f2027",
    color: "white",
    minHeight: "100vh",
  },

  list: {
    marginTop: "20px",
  },

  row: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    margin: "10px 0",
  },

  select: {
    padding: "8px",
    borderRadius: "6px",
    border: "none",
  },

  button: {
    marginTop: "20px",
    padding: "10px 20px",
    background: "#00c853",
    border: "none",
    borderRadius: "6px",
    color: "white",
    cursor: "pointer",
  },

  card: {
    marginTop: "30px",
    padding: "20px",
    background: "rgba(255,255,255,0.1)",
    borderRadius: "12px",
    display: "inline-block",
    minWidth: "250px",
  },
}

export default page

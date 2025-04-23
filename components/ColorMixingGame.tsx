'use client';

import { useState, useEffect, useCallback } from 'react';

interface ColorState {
  r: number;
  g: number;
  b: number;
}

interface HistoryEntry {
  rgb: number[];
  match: number;
  score: number;
}

const ColorMixingGame = () => {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameActive, setGameActive] = useState(false);
  const [targetColor, setTargetColor] = useState<ColorState>({ r: 0, g: 0, b: 0 });
  const [playerColor, setPlayerColor] = useState<ColorState>({ r: 0, g: 0, b: 0 });
  const [message, setMessage] = useState('');
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const [showNext, setShowNext] = useState(false);

  // Generate random color
  const generateRandomColor = useCallback(() => {
    return {
      r: Math.floor(Math.random() * 256),
      g: Math.floor(Math.random() * 256),
      b: Math.floor(Math.random() * 256),
    };
  }, []);

  // Calculate color similarity based on human eye sensitivity
  const calculateSimilarity = (target: ColorState, player: ColorState) => {
    // Weights based on human eye sensitivity to RGB
    const weights = {
      r: 0.299,
      g: 0.587,
      b: 0.114
    };

    // Calculate weighted difference
    const weightedDiff = 
      weights.r * Math.abs(target.r - player.r) +
      weights.g * Math.abs(target.g - player.g) +
      weights.b * Math.abs(target.b - player.b);

    // Convert to percentage and invert (100% - difference%)
    const similarity = 100 - (weightedDiff / 255 * 100);
    
    // Return with one decimal place
    return Number(similarity.toFixed(1));
  };

  // Setup new round
  const setupRound = useCallback(() => {
    const newTarget = generateRandomColor();
    setTargetColor(newTarget);
    setPlayerColor({ r: 0, g: 0, b: 0 });
    setMessage('');
    setShowHistory(false);
  }, [generateRandomColor]);

  // Submit color match
  const checkMatch = () => {
    if (!gameActive) return;
    
    const similarity = Number(calculateSimilarity(targetColor, playerColor));
    let scoreChange = 0;
    let newMessage = '';

    if (similarity >= 95) {
      scoreChange = 10;
      newMessage = `Amazing! Perfect match! +10 points (${similarity}% match)`;
      setShowNext(true);
    } else {
      newMessage = `Current match: ${similarity}%`;
    }

    const newEntry = { 
      rgb: [playerColor.r, playerColor.g, playerColor.b],
      match: similarity,
      score: scoreChange
    };

    setHistory(prev => [...prev, newEntry]);
    if (scoreChange > 0) {
      setScore(prev => prev + scoreChange);
    }
    setMessage(newMessage);
    setShowHistory(true);
  };

  // Calculate final score for the round
  const calculateRoundScore = () => {
    const lastFiveAttempts = history.slice(-5);
    if (lastFiveAttempts.length === 0) return;

    // 检查是否已经有完美匹配
    const hasPerfectMatch = history.some(entry => entry.match >= 95);
    if (hasPerfectMatch) return;

    const averageMatch = lastFiveAttempts.reduce((sum, entry) => sum + entry.match, 0) / lastFiveAttempts.length;
    let scoreChange = 0;
    let resultMessage = '';

    if (averageMatch >= 90) {
      scoreChange = 8;
      resultMessage = `Excellent! Average match: ${averageMatch.toFixed(1)}% (+8 points)`;
    } else if (averageMatch >= 80) {
      scoreChange = 5;
      resultMessage = `Great! Average match: ${averageMatch.toFixed(1)}% (+5 points)`;
    } else {
      scoreChange = -5;
      resultMessage = `Try harder! Average match: ${averageMatch.toFixed(1)}% (-5 points)`;
    }

    setScore(prev => prev + scoreChange);
    setMessage(`${resultMessage}\nTarget RGB: (${targetColor.r}, ${targetColor.g}, ${targetColor.b})`);
  };

  // Timer effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            // Don't end the game, just calculate round score if needed
            if (!history.some(entry => entry.match >= 95)) {
              calculateRoundScore();
            }
            setShowNext(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [gameActive, timeLeft, history]);

  // Start game
  const startGame = () => {
    setTimeLeft(60);
    setGameActive(true);
    setHistory([]);
    setShowNext(false);
    setShowHistory(false);
    setupRound();
  };

  // Next round
  const nextRound = () => {
    setTimeLeft(60);
    setHistory([]);
    setShowNext(false);
    setShowHistory(false);
    setupRound();
  };

  // Handle slider changes
  const adjustColor = (color: keyof ColorState, delta: number) => {
    const newValue = Math.max(0, Math.min(255, playerColor[color] + delta));
    setPlayerColor(prev => ({ ...prev, [color]: newValue }));
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg text-center w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4">Color Mixing Lab</h2>
      <div className="flex justify-between mb-4">
        <p>Score: <span className="font-bold">{score}</span></p>
        <p>Time Left: <span className="font-bold">{timeLeft}s</span></p>
      </div>
      
      <div className="flex justify-center gap-4 mb-4">
        <div>
          <div 
            className="w-32 h-32 rounded-lg shadow mb-2"
            style={{ backgroundColor: `rgb(${targetColor.r},${targetColor.g},${targetColor.b})` }}
          />
          <p className="text-sm">Target Color</p>
        </div>
        <div>
          <div 
            className="w-32 h-32 rounded-lg shadow mb-2"
            style={{ backgroundColor: `rgb(${playerColor.r},${playerColor.g},${playerColor.b})` }}
          />
          <p className="text-sm">Your Mix</p>
        </div>
      </div>

      <div className="mb-6 space-y-4">
        {['r', 'g', 'b'].map((color) => (
          <div key={color} className="flex items-center gap-2">
            <button
              onClick={() => adjustColor(color as keyof ColorState, -1)}
              className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm"
            >
              -
            </button>
            <span className="w-8 text-left">{color.toUpperCase()}:</span>
            <input
              type="range"
              min="0"
              max="255"
              value={playerColor[color as keyof ColorState]}
              onChange={(e) => adjustColor(color as keyof ColorState, Number(e.target.value) - playerColor[color as keyof ColorState])}
              className="flex-1"
            />
            <button
              onClick={() => adjustColor(color as keyof ColorState, 1)}
              className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm"
            >
              +
            </button>
            <span className="w-12 text-right">{playerColor[color as keyof ColorState]}</span>
          </div>
        ))}
      </div>

      <div className="space-x-4">
        <button
          onClick={checkMatch}
          disabled={!gameActive || showNext}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50"
        >
          Submit
        </button>
        {showNext ? (
          <button
            onClick={nextRound}
            className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600"
          >
            Next Round
          </button>
        ) : (
          <button
            onClick={startGame}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            {gameActive ? 'Restart' : 'Start Game'}
          </button>
        )}
      </div>

      {message && (
        <p className={`mt-4 text-lg font-semibold whitespace-pre-line ${
          message.includes('Amazing') ? 'text-green-500' : 
          message.includes('Excellent') ? 'text-emerald-500' :
          message.includes('Great') ? 'text-blue-500' :
          message.includes('Try harder') ? 'text-red-500' :
          'text-gray-700'
        }`}>
          {message}
        </p>
      )}

      {showHistory && history.length > 0 && (
        <div className="mt-6">
          <h3 className="font-bold mb-2">Last 5 Attempts</h3>
          <div className="space-y-2">
            {history.slice(-5).reverse().map((entry, i) => (
              <div key={i} className="text-sm flex justify-between items-center">
                <span>RGB({entry.rgb.join(', ')})</span>
                <span className={entry.score > 0 ? 'text-green-500' : ''}>
                  {entry.match}% {entry.score > 0 && `(+${entry.score})`}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorMixingGame; 
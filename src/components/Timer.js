import React, { useState, useEffect } from 'react';
import { Box, Text, Flex, Button } from '@chakra-ui/react';

const Timer = () => {
  const [time, setTime] = useState(60 * 1000);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const [lapCount, setLapCount] = useState(0);
  const [shimmerIndex, setShimmerIndex] = useState(null);

  useEffect(() => {
    const triggerShimmer = () => {
      const randomIndex = Math.floor(Math.random() * 4); // Randomly select one of the 4 buttons
      setShimmerIndex(randomIndex);
      setTimeout(() => setShimmerIndex(null), 4000); // Reset after 2 cycles of the 2s pulse animation
    };

    const interval = setInterval(triggerShimmer, Math.random() * 5000 + 2000); // Random interval between 2s and 7s
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let interval;
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime(prev => prev - 10);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const handleStart = () => {
    if (!isRunning && time > 0) {
      setIsRunning(true);
      if (lapCount < 2) {
        setLapCount(prev => prev + 1);
        setLaps(prev => [...prev, { id: lapCount + 1, time: formatTime(time) }]);
      }
    } else {
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(60 * 1000);
    setLaps([]);
    setLapCount(0);
  };

  const formatTime = ms => {
    const minutes = Math.floor(ms / (60 * 1000));
    const seconds = Math.floor((ms % (60 * 1000)) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
  };

  return (
    <Box p={5} boxShadow="neumorphic" w="300px" borderRadius="20px">
      <Flex justify="space-between" align="center" mb={4}>
        <Text fontSize="24px" color="neumorphic.text">Timer</Text>
        <Box
          fontSize="16px"
          color="neumorphic.text"
          w="24px"
          h="24px"
          borderRadius="50%"
          boxShadow="neumorphic"
          display="flex"
          justifyContent="center"
          alignItems="center"
          cursor="pointer"
        >
          ⚙️
        </Box>
      </Flex>
      <Box
        w="180px"
        h="180px"
        mx="auto"
        borderRadius="50%"
        boxShadow="neumorphic"
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="relative"
      >
        <Box
          w="180px"
          h="180px"
          borderRadius="50%"
          boxShadow="neumorphicInset"
          display="flex"
          justifyContent="center"
          alignItems="center"
          fontSize="28px"
          fontWeight="bold"
          color="neumorphic.text"
        >
          {formatTime(time)}
        </Box>
      </Box>
      <Flex justify="space-between" my={4}>
        <Button onClick={handleStart}>{isRunning ? 'Lap' : 'Start'}</Button>
        <Button color="neumorphic.accent" onClick={handleReset}>Reset</Button>
      </Flex>
      {laps.map(lap => (
        <Flex key={lap.id} justify="space-between" bg="neumorphic.background" p={3} borderRadius="10px" boxShadow="neumorphic" my={1}>
          <Text fontSize="14px" color="neumorphic.text">{lap.id} Lap</Text>
          <Text fontSize="14px" color="neumorphic.text">{lap.time}</Text>
        </Flex>
      ))}
      <Flex justify="space-around" mt={4}>
        {['🕒', '⏰', '⏱️', '🔄'].map((icon, index) => (
          <Box
            key={index}
            as={Button}
            variant="navButton"
            className={`${index === 2 ? 'active' : ''} ${shimmerIndex === index ? 'shimmer' : ''}`}
          >
            {icon}
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Timer;
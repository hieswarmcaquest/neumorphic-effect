import React, { useState, useEffect } from 'react';
import { Box, Text, Flex, Switch, Button } from '@chakra-ui/react';

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [alarm1, setAlarm1] = useState(false);
  const [alarm2, setAlarm2] = useState(false);
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
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourRotation = (hours % 12) * 30 + minutes / 2;
  const minuteRotation = minutes * 6;
  const secondRotation = seconds * 6;

  return (
    <Box p={5} boxShadow="neumorphic" w="300px" borderRadius="20px">
      <Flex justify="space-between" align="center" mb={4}>
        <Text fontSize="24px" color="neumorphic.text">Clock</Text>
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
        bg="neumorphic.background"
        boxShadow="neumorphic"
        position="relative"
      >
        <Box
          w="4px"
          h="50px"
          bg="neumorphic.text"
          position="absolute"
          top="40px"
          left="50%"
          transformOrigin="bottom"
          transform="translateX(-50%)"
          style={{ transform: `rotate(${hourRotation}deg)` }}
        />
        <Box
          w="3px"
          h="70px"
          bg="neumorphic.text"
          position="absolute"
          top="20px"
          left="50%"
          transformOrigin="bottom"
          transform="translateX(-50%)"
          style={{ transform: `rotate(${minuteRotation}deg)` }}
        />
        <Box
          w="2px"
          h="80px"
          bg="neumorphic.accent"
          position="absolute"
          top="10px"
          left="50%"
          transformOrigin="bottom"
          transform="translateX(-50%)"
          style={{ transform: `rotate(${secondRotation}deg)` }}
        />
      </Box>
      <Flex align="center" justify="space-between" bg="neumorphic.background" p={3} borderRadius="10px" boxShadow="neumorphic" my={2}>
        <Text fontSize="14px" color="neumorphic.text">5:00 am</Text>
        <Switch isChecked={alarm1} onChange={() => setAlarm1(!alarm1)} />
      </Flex>
      <Flex align="center" justify="space-between" bg="neumorphic.background" p={3} borderRadius="10px" boxShadow="neumorphic" my={2}>
        <Text fontSize="14px" color="neumorphic.text">6:00 am</Text>
        <Switch isChecked={alarm2} onChange={() => setAlarm2(!alarm2)} />
      </Flex>
      <Flex justify="space-around" mt={4}>
        {['🕒', '⏰', '⏱️', '🔄'].map((icon, index) => (
          <Box
            key={index}
            as={Button}
            variant="navButton"
            className={`${index === 0 ? 'active' : ''} ${shimmerIndex === index ? 'shimmer' : ''}`}
          >
            {icon}
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Clock;
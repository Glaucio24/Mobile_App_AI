import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

const BreathingExerciseScreen = () => {
  const [timeRemaining, setTimeRemaining] = useState(300);
  const [breathingMessage, setBreathingMessage] = useState('Breathe in slowly...');
  const circleSize = useRef(new Animated.Value(100)).current;
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let isActive = true;

    const breathe = () => {
      if (!isActive) return;

      // Step 1: Breathe in slowly
      setBreathingMessage('Breathe in slowly...');
      Animated.timing(circleSize, {
        toValue: 130,
        duration: 4000,
        useNativeDriver: false,
      }).start(() => {
        // Step 2: Hold your breath (delay 1500ms)
        setBreathingMessage('Hold your breath...');
        setTimeout(() => {
          // Step 3: Breathe out slowly
          setBreathingMessage('Breathe out slowly...');
          Animated.timing(circleSize, {
            toValue: 100,
            duration: 4000,
            useNativeDriver: false,
          }).start(() => {
            // Repeat cycle if time remains
            if (timeRemaining > 0 && isActive) {
              breathe();
            }
          });
        }, 2500);
      });
    };

    breathe();

    return () => {
      isActive = false;
      circleSize.stopAnimation();
    };
  }, []); // only run once on mount

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60).toString().padStart(2, '0');
    const sec = (s % 60).toString().padStart(2, '0');
    return `${m}:${sec}`;
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Breathing Exercise</Text>
      <Text style={styles.description}>
        Deep breathing can help reduce cravings. Most cravings pass within 3–5 minutes.
      </Text>

      <Text style={styles.timer}>{formatTime(timeRemaining)}</Text>

      <View style={styles.circleWrapper}>
        <Animated.View style={[styles.circle, { width: circleSize, height: circleSize }]}>
          <Text style={styles.circleText}>{breathingMessage}</Text>
        </Animated.View>
      </View>

      <TouchableOpacity onPress={() => router.back()} style={styles.endButton}>
        <Text style={styles.endText}>End Exercise</Text>
      </TouchableOpacity>

      <View style={styles.tipsContainer}>
        <Text style={styles.tipsTitle}>Craving Tips</Text>
        {[
          'Drink a glass of water slowly',
          'Take a short walk or change your environment',
          'Distract yourself with a quick task or game',
          'Text a supportive friend',
          "Remember why you're quitting",
        ].map((tip, index) => (
          <View key={index} style={styles.tipItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.tipText}>{tip}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default BreathingExerciseScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'black',
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 20,
  },
  backText: {
    fontSize: 28,
    color: '#FFD700',
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    color: '#ccc',
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  timer: {
    fontSize: 20,
    color: '#FFD700',
    marginBottom: 20,
  },
  circleWrapper: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  circle: {
    borderRadius: 1000,
    backgroundColor: '#FFD700',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'white',
  },
  circleText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  endButton: {
    borderColor: '#FFD700',
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginTop: 16,
  },
  endText: {
    color: '#FFD700',
    fontWeight: 'bold',
  },
  tipsContainer: {
    marginTop: 32,
    width: '100%',
  },
  tipsTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  tipItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  bullet: {
    color: '#FFD700',
    fontSize: 16,
    marginRight: 8,
  },
  tipText: {
    color: '#ccc',
    fontSize: 16,
    flexShrink: 1,
  },
});

import React from 'react';
import {spring, SpringConfig, useCurrentFrame, useVideoConfig} from 'remotion';
import {Single} from './Single';

const Devices = () => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();
	const springConfig: SpringConfig = {
		damping: 100,
		mass: 2,
		stiffness: 100,
		overshootClamping: false,
	};

	const bigScale = spring({
		config: springConfig,
		from: 1.1,
		fps: videoConfig.fps,
		frame,
		to: 0.9,
	});
	const smallScale = spring({
		config: springConfig,
		from: 0.5,
		to: 0.6,
		frame,
		fps: videoConfig.fps,
	});
	const offset = spring({
		config: springConfig,
		from: 100,
		to: 0,
		fps: videoConfig.fps,
		frame,
	});
	const awesome = require('../assets/awesome.png');
	const face = require('../assets/face.png');
	const home = require('../assets/home.png');

	return (
		<div
			style={{
				height: videoConfig.height,
				width: videoConfig.width,
				backgroundColor: 'white',
			}}
		>
			<Single
				source={face}
				style={{transform: `scale(${smallScale})`, marginLeft: -300 - offset}}
			/>
			<Single
				source={home}
				style={{transform: `scale(${smallScale})`, marginLeft: 300 + offset}}
			/>
			<Single source={awesome} style={{transform: `scale(${bigScale})`}} />
		</div>
	);
};

export default Devices;

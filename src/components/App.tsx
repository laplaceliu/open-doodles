import './App.css';

import React, { useState } from 'react';

import BikiniDoodle from './doodles/BikiniDoodle';
import DancingDoodle from './doodles/DancingDoodle';
import DoodleEditor from './DoodleEditor';
import { default as DoodleProps } from './doodles/Props';
import GroovySittingDoodle from './doodles/GroovySittingDoodle';
import IceCreamDoodle from './doodles/IceCreamDoodle';
import JumpingDoodle from './doodles/JumpingDoodle';
import LovingDoodle from './doodles/LovingDoodle';
import MeditatingDoodle from './doodles/MeditatingDoodle';
import MoshingDoodle from './doodles/MoshingDoodle';
import PettingDoodle from './doodles/PettingDoodle';
import ReadingDoodle from './doodles/ReadingDoodle';
import RollerSkatingDoodle from './doodles/RollerSkatingDoodle';
import RollingDoodle from './doodles/RollingDoodle';
import RunningDoodle from './doodles/RunningDoodle';
import SelfieDoodle from './doodles/SelfieDoodle';
import SittingDoodle from './doodles/SittingDoodle';
import SprintingDoodle from './doodles/SprintingDoodle';
import StrollingDoodle from './doodles/StrollingDoodle';
import SwingingDoodle from './doodles/SwingingDoodle';
import UnboxingDoodle from './doodles/UnboxingDoodle';
import ZombieingDoodle from './doodles/ZombieingDoodle';

const App: React.FC = () => {
	const [ doodleState, setDoodleState ] = useState<DoodleProps>({
		inkColor: '#000000',
		accentColor: '#CF536D'
	});
	// TODO: maybe need to use useCallback to memorize this?
	const onInkColorUpdate = (color: string) => {
		setDoodleState((oldStatus: DoodleProps) => ({
			...oldStatus,
			inkColor: color
		}));
	};
	const onAccentColorUpdate = (color: string) => {
		setDoodleState((oldStatus: DoodleProps) => ({
			...oldStatus,
			accentColor: color
		}));
	};
	return (
		<div className="App">
			<div className="sidebar">
				<h1 className="logo">Open Doodles</h1>
				<div className="div-block-4">
					<div className="div-block-5">
						<div>Theme</div>
						<a href="#">New</a>
					</div>
					<div className="div-block-2">
						<div className="div-block" />
						<div className="div-block accent" />
						<div className="div-block background" />
					</div>
					<div className="div-block-2">
						<div className="div-block" />
						<div className="div-block" />
						<div className="div-block" />
					</div>
					<div className="div-block-2">
						<div className="div-block" />
						<div className="div-block" />
						<div className="div-block" />
					</div>
				</div>
				<a href="#" className="button w-button">
					Download Pack
				</a>
				<div className="div-block-3">
					<a href="#">Studio File</a>
					<a href="#">Sketch File</a>
				</div>
			</div>
			<div className="section-2" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
				<svg width="400px" height="300px" viewBox="0 0 1024 768" version="1.1">
					<BikiniDoodle {...doodleState} />
				</svg>
				<svg width="400px" height="300px" viewBox="0 0 1024 768" version="1.1">
					<SprintingDoodle {...doodleState} />
				</svg>
				<svg width="400px" height="300px" viewBox="0 0 1024 768" version="1.1">
					<MoshingDoodle {...doodleState} />
				</svg>
				<svg width="400px" height="300px" viewBox="0 0 1024 768" version="1.1">
					<MeditatingDoodle {...doodleState} />
				</svg>
				<svg width="400px" height="300px" viewBox="0 0 1024 768" version="1.1">
					<GroovySittingDoodle {...doodleState} />
				</svg>
				<svg width="400px" height="300px" viewBox="0 0 1024 768" version="1.1">
					<SwingingDoodle {...doodleState} />
				</svg>
				<svg width="400px" height="300px" viewBox="0 0 1024 768" version="1.1">
					<ZombieingDoodle {...doodleState} />
				</svg>
				<svg width="400px" height="300px" viewBox="0 0 1024 768" version="1.1">
					<UnboxingDoodle {...doodleState} />
				</svg>
				<svg width="400px" height="300px" viewBox="0 0 1024 768" version="1.1">
					<DancingDoodle {...doodleState} />
				</svg>
				<svg width="400px" height="300px" viewBox="0 0 1024 768" version="1.1">
					<StrollingDoodle {...doodleState} />
				</svg>
				<svg width="400px" height="300px" viewBox="0 0 1024 768" version="1.1">
					<RollingDoodle {...doodleState} />
				</svg>
				<svg width="400px" height="300px" viewBox="0 0 1024 768" version="1.1">
					<RollerSkatingDoodle {...doodleState} />
				</svg>
				<svg width="400px" height="300px" viewBox="0 0 1024 768" version="1.1">
					<JumpingDoodle {...doodleState} />
				</svg>
				<svg width="400px" height="300px" viewBox="0 0 1024 768" version="1.1">
					<SittingDoodle {...doodleState} />
				</svg>
				<svg width="400px" height="300px" viewBox="0 0 1024 768" version="1.1">
					<SelfieDoodle {...doodleState} />
				</svg>
				<svg width="400px" height="300px" viewBox="0 0 1024 768" version="1.1">
					<IceCreamDoodle {...doodleState} />
				</svg>
				<svg width="400px" height="300px" viewBox="0 0 1024 768" version="1.1">
					<ReadingDoodle {...doodleState} />
				</svg>
				<svg width="400px" height="300px" viewBox="0 0 1024 768" version="1.1">
					<RunningDoodle {...doodleState} />
				</svg>
				<svg width="400px" height="300px" viewBox="0 0 1024 768" version="1.1">
					<LovingDoodle {...doodleState} />
				</svg>
				<svg width="400px" height="300px" viewBox="0 0 1024 768" version="1.1">
					<PettingDoodle {...doodleState} />
				</svg>
			</div>
			<DoodleEditor {...{ ...doodleState, onInkColorUpdate, onAccentColorUpdate }} />
		</div>
	);
};

export default App;

import { BsFillHouseFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import React from 'react';

/**
 * Component for sidebar of algorithm page.
 *
 * @component
 * @param {"Light"|"Dark"} theme
 * @returns
 */
const AlgoSidebar = theme => {
	return (
		<>
			<div id={"algo-sidebar"} className={`show`}>
				<ul>
					<div id="algoControlSection">
						<div id="AlgorithmSpecificControls">

						</div>
						<div id="toggles"/>
					</div>
					
				</ul>
			</div>
		</>
	);
};

export default AlgoSidebar;

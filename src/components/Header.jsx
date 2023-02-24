import React from 'react'
import { ControlPresupuesto } from './ControlPresupuesto'
import { NuevoPresupuesto } from './NuevoPresupuesto'

export const Header = ({presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto, gastos}) => {

	return (
		<header>
			<h1>Planificador de Gastos</h1>
			{isValidPresupuesto ? (
			<ControlPresupuesto 
				presupuesto={presupuesto}
				gastos={gastos}
			/>
			) : (
			<NuevoPresupuesto 
				presupuesto={presupuesto}
				setPresupuesto={setPresupuesto}
				setIsValidPresupuesto={setIsValidPresupuesto}
			/>
			)}
			
		</header>
	)
}

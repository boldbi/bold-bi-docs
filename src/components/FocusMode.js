import React, { useEffect, useState, useRef } from 'react';
import '../assets/css/focus-mode.css';
import FocusButton from './FocusButton';

export default function FocusMode() {
	const KEY = 'site_focus_mode';
	const [on, setOn] = useState(false);
	const [isDark, setIsDark] = useState(typeof document !== 'undefined' && document.body.classList.contains('dark-mode'));

	const tooltipId = "focus_tooltip";
	const [menuOpen, setMenuOpen] = useState(false);
	const wrapperRef = useRef(null);

	useEffect(() => {
		try {
			const stored = localStorage.getItem(KEY);
			const isOn = stored === '1';
			setOn(isOn);
			document.body.classList.toggle('focus-mode', !!isOn);
		} catch (_) { }
	}, []);

	const toggle = () => {
		try {
			const next = !document.body.classList.contains('focus-mode');
			document.body.classList.toggle('focus-mode', next);
			setOn(next);
			try { localStorage.setItem(KEY, next ? '1' : '0'); } catch (_) { }
		} catch (_) { }
	};

	const toggleMenu = (e) => {
		setMenuOpen(v => !v);
	};

	useEffect(() => {
		const onDocClick = (e) => {
			if (!wrapperRef.current) return;
			if (!wrapperRef.current.contains(e.target)) setMenuOpen(false);
		};
		const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
		document.addEventListener('mousedown', onDocClick);
		document.addEventListener('keydown', onKey);
		return () => {
			document.removeEventListener('mousedown', onDocClick);
			document.removeEventListener('keydown', onKey);
		};
	}, []);

	// No proxy click; rely on global document click handler (ask-button.js)

	// keep icon in sync with theme changes (light/dark) immediately
	useEffect(() => {
		if (typeof document === 'undefined' || !document.body) return;
		const body = document.body;
		const obs = new MutationObserver(() => {
			const nowDark = body.classList.contains('dark-mode');
			setIsDark(nowDark);
		});
		obs.observe(body, { attributes: true, attributeFilter: ['class'] });
		// also ensure initial state
		setIsDark(body.classList.contains('dark-mode'));
		return () => obs.disconnect();
	}, []);

	// ✅ Tooltip show
	const showTooltip = (e, id) => {
		const tip = document.getElementById(id);
		if (!tip) return;

		const offset = 24;

		tip.style.left = e.clientX + "px";
		tip.style.top = (e.clientY + offset) + "px";
		tip.style.transform = "translateX(-38%)";
		tip.style.opacity = "1";
	};

	const hideTooltip = (id) => {
		const tip = document.getElementById(id);
		if (tip) tip.style.opacity = "0";
	};

	const iconFile = isDark
		? (on ? 'focus-mode-off-dark.svg' : 'focus-mode-on-dark.svg')
		: (on ? 'focus-mode-off-light.svg' : 'focus-mode-on-light.svg');

	const iconSrc = `/img/${iconFile}`;

	return (
		<div
			ref={wrapperRef}
			className={`focus-split-button${on ? ' active' : ''}`}
			style={{ display: 'inline-flex', gap: '6px', alignItems: 'center', position: 'relative' }}
		>
			{/* ✅ Main Button */}
			<button
				className={`focus-mode-btn${on ? ' active' : ''}`}
				aria-pressed={on}
				aria-describedby={tooltipId}
				data-tooltip-id={tooltipId}
				onMouseMove={(e) => showTooltip(e, tooltipId)}
				onMouseLeave={() => hideTooltip(tooltipId)}
				onClick={toggle}
				style={{ display: 'inline-flex', alignItems: 'center' }}
			>
				<img
					src={iconSrc}
					alt="focus icon"
					className="theme-focus-icon"
					style={{ marginRight: 8 }}
				/>
				<span className="focus-mode-label">Focus</span>
			</button>

			{/* ✅ Secondary Button */}
			<button
				className={`focus-toggle ${menuOpen ? 'focus-arrow-up' : ''}`}
				aria-label="Open focus menu"
				aria-expanded={menuOpen}
				onClick={toggleMenu}
				onKeyDown={(e) => { if (e.key === 'ArrowDown') { e.preventDefault(); setMenuOpen(true); } }}
				style={{
					border: '1px solid transparent',
					background: 'transparent',
					borderRadius: '6px',
					cursor: 'pointer'
				}}
			></button>

			{menuOpen && (
				<FocusButton />
			)}

			{/* ✅ Tooltip (IMPORTANT: outside button) */}
			<div id={tooltipId} className="custom-tooltip">
				{on ? 'Exit focus mode' : 'Enter focus mode'}
			</div>
		</div>
	);
}

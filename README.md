<a href="https://unity3d.com/"><img align="right" width="200" src="https://cloud.githubusercontent.com/assets/218624/7900049/19e189ba-06f6-11e5-963e-ccd5540eaa12.png"></a>

# Unity Awesomeness

**A collection of utility scripts for [Unity 5](https://unity3d.com/).**

Unity is a flexible and powerful development platform for creating multi-platform 3D and 2D games and interactive experiences.

## Table of contents

- [Artificial Intelligence](#artificial-intelligence)
- [Animation](#animation)
	- [Camera](#camera)
	- [Character Control](#character-ontrol)
- [Sound](#sound)
	- [Miscellaneous](#miscellaneous)

## Artificial Intelligence [<img width="32" height="32" align="right" src="https://assets-cdn.github.com/images/icons/emoji/unicode/261d.png" class="emoji" title="TOC">](#table-of-contents)

Name | Description | 2D | 3D
:-- | :-- | --- | ---
[`simplefollow.js`](AI/Scripts/simplefollow.js) | A very simple, flawed “follow the player’s transform” AI script. Because this usese Transform.Position, the object will simply pass through obstacles. Use script below for better results. | :white_check_mark: | :white_check_mark:
[`simplechase.js`](AI/Scripts/simplechase.js) | A simple “follow the target” AI script using a Character Controller and applied forces. Collides with obstacles, but no logic for pathfinding yet. | :white_check_mark: | :white_check_mark:

## Animation [<img width="32" height="32" align="right" src="https://assets-cdn.github.com/images/icons/emoji/unicode/261d.png" class="emoji" title="TOC">](#table-of-contents)

### Camera

Name | Description | 2D | 3D
:-- | :-- | --- | ---
[`smoothfollow2d.js`](Camera/smoothfollow2d.js) | A two-axis smooth follow camera script, can be used for (X,Z) or (X,Y) movement. | :white_check_mark: | :white_check_mark:
[FreeFlightCamera.js](Camera/FreeFlightCamera.js) | Fly through the scene using <kbd>WSAD</kbd> (or arrows) and mouse. | | :white_check_mark:

### Character Control

Name | Description | 2D | 3D
:-- | :-- | --- | ---
[`topdowncontrols.js`](Character Control/topdowncontrols.js) | A script used to control the 3D Character Controller script, configured for use in top-down gameplay. | | :white_check_mark:
[`sidescrollcontrols.js`](Character Control/sidescrollcontrols.js) | A script used to control the 3D Character Controller script, configured for use in sidescrolling gameplay. | | :white_check_mark:

## Sound [<img width="32" height="32" align="right" src="https://assets-cdn.github.com/images/icons/emoji/unicode/261d.png" class="emoji" title="TOC">](#table-of-contents)

### Miscellaneous

Name | Description | 2D | 3D
:-- | :-- | --- | ---
[`generateobjects.js`](Misc/generateobjects.js) | A simple script for generating a large number of objects on load. | :white_check_mark: | :white_check_mark:
[`randomsizeonload.js`](Misc/randomsizeonload.js) | Simple script (often used in tandem with [`generateobjects.js`](Misc/generateobjects.js)) that randomly sizes/places object on awake. | :white_check_mark: | :white_check_mark:
[`destroytaggedobjects.js`](Misc/destroytaggedobjects.js) | Simple “destroy object on collision if tagged” script. | :white_check_mark: | :white_check_mark:

# Endless Oddities – A Kitchen Sink modpack with a focus

**Discord server:** [link](https://discord.gg/YXm7vSBjdW)

..is a modpack that is essentially a extended Fork of [Euphoric Curiosity] focuses on giving Vanilla+ with the additional randomness mix with new Origins, Machines, Some magic stuff and even pinch of QoL stuff too. Other than the vanilla aspect of adding the partial additions caves & cliff world height and features, This modpack is focused to give the player a streamline experience as much as possible following my own take on vanilla+ concept. An attempt to keep things as simple to the user where possible, such as in crafting recipes, progression flow and etc.

mods chosen will hopefully flow into each other making it easy to get used to new ideas and concepts. If y'all curious, I listed my personal guidelines on building this modpack.

Be wary, this pack is still a **work in progress!** While it should be possible to make a whole playthrough with this pack, instability should be expected. there are some elements not yet finished notably the overview guide book.

## Download / Installation

The modpack is currently only available as a **self-updating** [MultiMC] instance.

1. Download and install [MultiMC] if you don't have it already.
2. download the latest release.
3. create a new instance on [MultiMC], select "Import from zip" and browse to the zip.
4. Download [packwiz-Installer-bootstrap], paste the jar file in in MultiMC instance (in /.minecraft/)
5. Start the game! At first launch, [packwiz] downloads all the config files and mods for you. When the modpack updates, the MultiMC instance will also update by itself with newly added / removed / updated mods, changed recipes, etc.

## Development

Requires the [packwiz] tool, so be sure to download it first.

Steps to update the modpack:

- Run `packwiz update --all` to update all mods to latest.
- Run `packwiz refresh` to update file index, necessary when modifying any files.
- Now you can create a commit and push to the repo.

If you want to do local testing:

- Modify MultiMC instance's "pre-launch command" to use:  
  `http://localhost:8080/pack.toml`
- Run `packwiz serve` to run a simple webserver.  
  Will also update index automatically on file changes.
- Launch the instance and it will pull changes from your local setup.

[Euphoric Curiosity]: https://www.curseforge.com/minecraft/modpacks/euphoriccuriosity
[Minecraft]: https://minecraft.net/
[MultiMC]: https://multimc.org/
[packwiz]: https://github.com/comp500/packwiz
[packwiz-Installer-bootstrap]: https://github.com/comp500/packwiz-installer-bootstrap/releases

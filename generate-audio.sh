#!/bin/zsh

set -e

audio_dir="assets/audio"
temp_file="/private/tmp/shapes-lesson-pronunciation.aiff"
mkdir -p "$audio_dir"

words=(
  rectangle
  triangle
  square
  circle
  oval
  star
  dot
  cross
  heart
  hexagon
  octagon
  rhombus
)

for word in "${words[@]}"; do
  say -v Samantha -o "$temp_file" "$word"
  afconvert -f WAVE -d LEI16@22050 "$temp_file" "$audio_dir/$word.wav"
done

echo "Created ${#words[@]} shape pronunciation files."

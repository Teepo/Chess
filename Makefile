SPRITE = ./public/images/pieces.svg

ALL_SVG := ./public/images/pieces/white/king.svg \
           ./public/images/pieces/white/queen.svg \
           ./public/images/pieces/white/rook.svg \
           ./public/images/pieces/white/bishop.svg \
           ./public/images/pieces/white/knight.svg \
           ./public/images/pieces/white/pawn.svg \
           ./public/images/pieces/black/king.svg \
           ./public/images/pieces/black/queen.svg \
           ./public/images/pieces/black/rook.svg \
           ./public/images/pieces/black/bishop.svg \
           ./public/images/pieces/black/knight.svg \
           ./public/images/pieces/black/pawn.svg

.PHONY: all
all: $(SPRITE)

$(SPRITE): $(ALL_SVG)
	echo "<?xml version='1.0' encoding='utf-8'?><!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>" > $(SPRITE)
	echo "<svg version='1.1' id='svg_icon_sprite' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 45 45'><defs>" >> $(SPRITE)
	cat $(ALL_SVG) >> $(SPRITE)
	echo "</defs></svg>" >> $(SPRITE)

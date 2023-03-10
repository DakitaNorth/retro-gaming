export default class View {

    constructor(element, width, height, rows, columns) {
        this.element = element;
        this.width = width;
        this.height = height;

        this.canvas = document.createElement("canvas");
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.context = this.canvas.getContext("2d");

        this.playfieldBorderWidth = 4;
        this.playfieldX = this.playfieldBorderWidth;
        this.playfieldY = this.playfieldBorderWidth;
        this.playfieldWidth = this.width * 2 / 3;
        this.playfieldHeight = this.height;
        this.playfieldInnerWidth = this.playfieldWidth - this.playfieldBorderWidth * 2;
        this.playfieldInnerHeight = this.playfieldHeight - this.playfieldBorderWidth * 2;

        this.blockWidth = this.playfieldInnerWidth / columns;
        this.blockHeight = this.playfieldInnerHeight / rows;

        this.panelX = this.playfieldWidth + 10;
        this.panelY = 0;
        this.panelWidth = this.width / 3;
        this.panelHeight = this.height;

        this.element.appendChild(this.canvas);
    };

    renderStartScreen() {
        this.context.fillStyle = "#D1FB84";
        this.context.font = '18px "Press Start 2P"';
        this.context.textAlign = "center";
        this.context.textBaseline = "middle";
        this.context.fillText("Press SPACE", this.width / 2, this.height / 2 - 30);
        this.context.fillText("To Start", this.width / 2, this.height / 2);
    };

    renderPauseScreen() {
        this.clearScreen();

        this.context.fillStyle = "#D1FB84";
        this.context.font = '18px "Press Start 2P"';
        this.context.textAlign = "center";
        this.context.textBaseline = "middle";
        this.context.fillText("Press SPACE", this.width / 2, this.height / 2 - 30);
        this.context.fillText("To Resume", this.width / 2, this.height / 2);
    };

    renderEndScreen({ score }) {
        this.clearScreen();

        this.context.fillStyle = "#D1FB84";
        this.context.font = '18px "Press Start 2P"';
        this.context.textAlign = "center";
        this.context.textBaseline = "middle";
        this.context.fillText("GAME OVER", this.width / 2, this.height / 2 - 60);
        this.context.fillText(`Score: ${score}`, this.width / 2, this.height / 2 - 30);
        this.context.fillText("Press SPACE", this.width / 2, this.height / 2 + 30);
        this.context.fillText("To Restart", this.width / 2, this.height / 2 + 60);
    };

    clearScreen() {
        this.context.clearRect(0, 0, this.width, this.height);
    };

    renderPlayfield({ playfield }) {
        for (let y = 0; y < playfield.length; y++) {
            const line = playfield[y];

            for (let x = 0; x < line.length; x++) {
                const block = line[x];

                if (block) {
                    this.renderBlock(
                        this.playfieldX + (x * this.blockWidth),
                        this.playfieldY + (y * this.blockHeight),
                        this.blockWidth,
                        this.blockHeight,
                        "#D1FB84"
                    );
                }
            }
        }

        this.context.strokeStyle = "#D1FB84";
        this.context.lineWidth = this.playfieldBorderWidth;
        this.context.strokeRect(0, 0, this.playfieldWidth, this.playfieldHeight);
    };

    renderPanel({ level, score, lines, nextPiece }) {
        this.context.textAlign = "start";
        this.context.textBaseline = "top";
        this.context.fillStyle = "#D1FB84";
        this.context.font = '14px "Press Start 2P"';

        this.context.fillText("Score:", this.panelX, this.panelY + 0);
        this.context.fillText(`${score}`, this.panelX, this.panelY + 24);
        this.context.fillText("Lines:", this.panelX, this.panelY + 48);
        this.context.fillText(`${lines}`, this.panelX, this.panelY + 72);
        this.context.fillText("Level:", this.panelX, this.panelY + 96);
        this.context.fillText(`${level}`, this.panelX, this.panelY + 120);
        this.context.fillText("Next", this.panelX, this.panelY + 144);

        for (let y = 0; y < nextPiece.blocks.length; y++) {
            for (let x = 0; x < nextPiece.blocks[y].length; x++) {
                const block = nextPiece.blocks[y][x];

                if (block) {
                    this.renderBlock(
                        this.panelX + (x * this.blockWidth * 0.8),
                        this.panelY + 150 + (y * this.blockHeight * 0.8),
                        this.blockWidth * 0.8,
                        this.blockHeight * 0.8,
                        "#D1FB84"
                    );
                }
            }
        }
    };

    renderBlock(x, y, width, height, color) {
        this.context.fillStyle = color;
        this.context.strokeStyle = "black";
        this.context.lineWidth = 2;

        this.context.fillRect(x, y, width, height);
        this.context.strokeRect(x, y, width, height);
    }

    renderMainScree(state) {
        this.clearScreen();
        this.renderPlayfield(state);
        this.renderPanel(state);
    };
};
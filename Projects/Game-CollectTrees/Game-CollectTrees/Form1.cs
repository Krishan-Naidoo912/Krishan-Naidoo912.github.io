using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Game_CollectTrees
{
    public partial class Form1 : Form
    {

        int playerSpeed = 20;
        int gameSpeed = 3;
        int score = 0;

        public Form1()
        {
            InitializeComponent();
            lblGameStatus.Visible = false;
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void Form1_KeyDown(object sender, KeyEventArgs e)
        {
            if(e.KeyCode is Keys.Left)
            {
                if(picPlayer.Left > 40)
                {
                    picPlayer.Left -= playerSpeed;
                }
                
            }

            if (e.KeyCode is Keys.Right)
            {
                if (picPlayer.Right < 660)
                {
                    picPlayer.Left += playerSpeed;
                }

            }

        }

        private void timer1_Tick(object sender, EventArgs e)
        {
            dropTrees(gameSpeed);
            collecTrees();
            lblSpeed.Text = "Speed: " + gameSpeed;
        }

        public void collecTrees()
        {
            Random rand1 = new Random();
            Random rand2 = new Random();
            int x, y;

            if (picPlayer.Bounds.IntersectsWith(picTree1.Bounds))
            {
                score += 1;
                lblScore.Text = "Score: " + score;
                x = rand1.Next(10, 650);
                y = rand2.Next(-10, 0);
                picTree1.Location = new Point(x, y);
            }

            if (picPlayer.Bounds.IntersectsWith(picTree2.Bounds))
            {
                score += 1;
                lblScore.Text = "Score: " + score;
                x = rand1.Next(10, 650);
                y = rand2.Next(-10, 0);
                picTree2.Location = new Point(x, y);
            }

            if (picPlayer.Bounds.IntersectsWith(picTree3.Bounds))
            {
                score += 1;
                lblScore.Text = "Score: " + score;
                x = rand1.Next(10, 650);
                y = rand2.Next(-10, 0);
                picTree3.Location = new Point(x, y);
            }

            switch (score)
            {
                case 10 : gameSpeed = 4;
                    break;
                case 15:
                    gameSpeed = 5;
                    break;
                case 20:
                    gameSpeed = 6;
                    break;
                case 25:
                    gameSpeed = 7;
                    break;
                case 30:
                    gameSpeed = 8;
                    break;
                case 35:
                    gameSpeed = 9;
                    break;
                case 40:
                    gameSpeed = 10;
                    youWin();
                    break;
            }
        }

        public void gameOver()
        {           
           timer1.Enabled = false;
           lblGameStatus.Visible = true;
           lblGameStatus.Text = "GAME OVER - SCORE: " + score;
        }

        public void dropTrees(int gameSpeed)
        {
            if (picTree1.Top >= -10)
            {
                picTree1.Top += gameSpeed;
            }

            if (picTree2.Top >= -10)
            {
                picTree2.Top += gameSpeed;
            }

            if (picTree3.Top >= -10)
            {
                picTree3.Top += gameSpeed;
            }

            if (picTree1.Top > 400)
            {
                gameOver();
            }

            if (picTree2.Top > 400)
            {
                gameOver();
            }

            if (picTree3.Top > 400)
            {
                gameOver();
            }
        }

        public void youWin()
        {
            timer1.Enabled = false;
            lblGameStatus.Visible = true;
            lblGameStatus.Text = "YOU WIN!! SCORE: " + score;
            picPlayer.Location = new Point(250,300);
            picTree1.Location = new Point(50, 10);
            picTree2.Location = new Point(300, 5);
            picTree3.Location = new Point(550, 10);
        }
    }
}

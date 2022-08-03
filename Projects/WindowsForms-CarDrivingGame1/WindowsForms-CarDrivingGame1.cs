using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsForms_RacingGame1
{
	public partial class Form1 : Form
	{
		int treeSpeed = 20;
		int playerSpeed = 15;
		int carsSpeed = 20;
		int roadLinesSpeed = 35;
		int score = 0;

		public Form1()
		{
			InitializeComponent();
			lbl_score.Text = "Score: 0";
			lbl_restart.Visible = false;
		}

		private void pictureBox1_Click(object sender, EventArgs e)
		{

		}

		private void timer_Tick(object sender, EventArgs e)
		{
			moveTrees(treeSpeed);
			moveCars(carsSpeed);
			gameOver();
			moveLines(roadLinesSpeed);
		}

		public void moveTrees(int treeSpeed)
		{
			if (p_tree1.Left < -100)
			{
				p_tree1.Left = 1050;
			}
			else if (p_tree2.Left < -100)
			{
				p_tree2.Left = 1050;
			}
			else if (p_tree3.Left < -100)
			{
				p_tree3.Left = 1050;
			}
			else
			{
				p_tree1.Left -= treeSpeed;
				p_tree2.Left -= treeSpeed;
				p_tree3.Left -= treeSpeed;
			}
		}


		public void moveCars(int carsSpeed)
		{
			Random location = new Random();
			int y1, y2;

			if (p_car1.Left < -100)
			{
				y1 = location.Next(165, 420);
				p_car1.Location = new Point(1020, y1);
				score++;
				lbl_score.Text = "Score: " + score;
			}
			else if (p_car2.Left < -100)
			{
				y2 = location.Next(165, 420);
				p_car2.Location = new Point(1200, y2);
				if (p_car2.Bounds.IntersectsWith(p_car1.Bounds))
				{
					y2 = location.Next(165, 420);
					p_car2.Location = new Point(1200, y2);
				}
				score++;
				lbl_score.Text = "Score: " + score;
			}
			else
			{
				p_car1.Left -= carsSpeed;
				p_car2.Left -= carsSpeed + 5;
			}

		}

		public void moveLines(int roadLinesSpeed)
		{
			if (p_roadLine1.Left < -100)
			{
				p_roadLine1.Left = 1050;
			}
			else if (p_roadLine2.Left < -100)
			{
				p_roadLine2.Left = 1050;
			}
			else if (p_roadLine3.Left < -100)
			{
				p_roadLine3.Left = 1050;
			}
			else if (p_roadLine4.Left < -100)
			{
				p_roadLine4.Left = 1050;
			}
			else if (p_roadLine5.Left < -100)
			{
				p_roadLine5.Left = 1050;
			}
			else if (p_roadLine6.Left < -100)
			{
				p_roadLine6.Left = 1050;
			}
			else
			{
				p_roadLine1.Left -= roadLinesSpeed;
				p_roadLine2.Left -= roadLinesSpeed;
				p_roadLine3.Left -= roadLinesSpeed;
				p_roadLine4.Left -= roadLinesSpeed;
				p_roadLine5.Left -= roadLinesSpeed;
				p_roadLine6.Left -= roadLinesSpeed;
			}

		}

		public void gameOver()
		{
			if (p_player.Bounds.IntersectsWith(p_car1.Bounds) || p_player.Bounds.IntersectsWith(p_car2.Bounds))
			{
				timer.Stop();
				lbl_score.Text = "GAME OVER - Score:" + score;
				lbl_restart.Visible = true;
			}

		}

		private void Form1_KeyDown(object sender, KeyEventArgs e)
		{
			if (e.KeyCode.Equals(Keys.Down))
			{
				if (p_player.Top < 420)
				{
					p_player.Top += playerSpeed;
				}

			}
			if (e.KeyCode.Equals(Keys.Up))
			{
				if (p_player.Top > 165)
				{
					p_player.Top -= playerSpeed;
				}

			}
		}

		private void lbl_restart_Click(object sender, EventArgs e)
		{
			timer.Start();
			score = 0;
			lbl_score.Text = "Score: 0";
			p_player.Location = new Point(0, 340);
			p_car1.Location = new Point(1050, 200);
			p_car2.Location = new Point(1050, 400);
			lbl_restart.Visible = false;
		}
	}
}

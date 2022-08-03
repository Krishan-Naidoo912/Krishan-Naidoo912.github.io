
namespace WindowsForms_RacingGame1
{
	partial class Form1
	{
		/// <summary>
		/// Required designer variable.
		/// </summary>
		private System.ComponentModel.IContainer components = null;

		/// <summary>
		/// Clean up any resources being used.
		/// </summary>
		/// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
		protected override void Dispose(bool disposing)
		{
			if (disposing && (components != null))
			{
				components.Dispose();
			}
			base.Dispose(disposing);
		}

		#region Windows Form Designer generated code

		/// <summary>
		/// Required method for Designer support - do not modify
		/// the contents of this method with the code editor.
		/// </summary>
		private void InitializeComponent()
		{
            this.components = new System.ComponentModel.Container();
            this.timer = new System.Windows.Forms.Timer(this.components);
            this.lbl_score = new System.Windows.Forms.Label();
            this.lbl_restart = new System.Windows.Forms.Label();
            this.p_player = new System.Windows.Forms.PictureBox();
            this.p_car2 = new System.Windows.Forms.PictureBox();
            this.p_car1 = new System.Windows.Forms.PictureBox();
            this.p_roadLine6 = new System.Windows.Forms.PictureBox();
            this.p_roadLine5 = new System.Windows.Forms.PictureBox();
            this.p_roadLine4 = new System.Windows.Forms.PictureBox();
            this.p_roadLine3 = new System.Windows.Forms.PictureBox();
            this.p_roadLine2 = new System.Windows.Forms.PictureBox();
            this.p_roadLine1 = new System.Windows.Forms.PictureBox();
            this.p_road = new System.Windows.Forms.PictureBox();
            this.p_tree1 = new System.Windows.Forms.PictureBox();
            this.p_tree2 = new System.Windows.Forms.PictureBox();
            this.p_tree3 = new System.Windows.Forms.PictureBox();
            ((System.ComponentModel.ISupportInitialize)(this.p_player)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.p_car2)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.p_car1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.p_roadLine6)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.p_roadLine5)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.p_roadLine4)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.p_roadLine3)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.p_roadLine2)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.p_roadLine1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.p_road)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.p_tree1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.p_tree2)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.p_tree3)).BeginInit();
            this.SuspendLayout();
            // 
            // timer
            // 
            this.timer.Enabled = true;
            this.timer.Interval = 50;
            this.timer.Tick += new System.EventHandler(this.timer_Tick);
            // 
            // lbl_score
            // 
            this.lbl_score.AutoSize = true;
            this.lbl_score.BackColor = System.Drawing.Color.Yellow;
            this.lbl_score.ForeColor = System.Drawing.SystemColors.Highlight;
            this.lbl_score.Location = new System.Drawing.Point(858, 0);
            this.lbl_score.Name = "lbl_score";
            this.lbl_score.Size = new System.Drawing.Size(41, 13);
            this.lbl_score.TabIndex = 11;
            this.lbl_score.Text = "Score: ";
            // 
            // lbl_restart
            // 
            this.lbl_restart.AutoSize = true;
            this.lbl_restart.BackColor = System.Drawing.Color.SpringGreen;
            this.lbl_restart.Location = new System.Drawing.Point(465, 246);
            this.lbl_restart.Name = "lbl_restart";
            this.lbl_restart.Size = new System.Drawing.Size(58, 13);
            this.lbl_restart.TabIndex = 12;
            this.lbl_restart.Text = "RESTART";
            this.lbl_restart.Click += new System.EventHandler(this.lbl_restart_Click);
            // 
            // p_player
            // 
            this.p_player.BackColor = System.Drawing.Color.Gray;
            this.p_player.Image = global::WindowsForms_RacingGame1.Properties.Resources.Picture_Car5;
            this.p_player.Location = new System.Drawing.Point(0, 174);
            this.p_player.Name = "p_player";
            this.p_player.Size = new System.Drawing.Size(165, 63);
            this.p_player.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.p_player.TabIndex = 9;
            this.p_player.TabStop = false;
            // 
            // p_car2
            // 
            this.p_car2.BackColor = System.Drawing.Color.Gray;
            this.p_car2.Image = global::WindowsForms_RacingGame1.Properties.Resources.Picture_Car3;
            this.p_car2.Location = new System.Drawing.Point(800, 449);
            this.p_car2.Name = "p_car2";
            this.p_car2.Size = new System.Drawing.Size(172, 50);
            this.p_car2.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.p_car2.TabIndex = 10;
            this.p_car2.TabStop = false;
            // 
            // p_car1
            // 
            this.p_car1.BackColor = System.Drawing.Color.Gray;
            this.p_car1.Image = global::WindowsForms_RacingGame1.Properties.Resources.Picture_Car2;
            this.p_car1.Location = new System.Drawing.Point(811, 174);
            this.p_car1.Name = "p_car1";
            this.p_car1.Size = new System.Drawing.Size(161, 85);
            this.p_car1.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.p_car1.TabIndex = 10;
            this.p_car1.TabStop = false;
            // 
            // p_roadLine6
            // 
            this.p_roadLine6.BackColor = System.Drawing.Color.White;
            this.p_roadLine6.Location = new System.Drawing.Point(882, 297);
            this.p_roadLine6.Name = "p_roadLine6";
            this.p_roadLine6.Size = new System.Drawing.Size(90, 20);
            this.p_roadLine6.TabIndex = 7;
            this.p_roadLine6.TabStop = false;
            // 
            // p_roadLine5
            // 
            this.p_roadLine5.BackColor = System.Drawing.Color.White;
            this.p_roadLine5.Location = new System.Drawing.Point(709, 297);
            this.p_roadLine5.Name = "p_roadLine5";
            this.p_roadLine5.Size = new System.Drawing.Size(90, 20);
            this.p_roadLine5.TabIndex = 6;
            this.p_roadLine5.TabStop = false;
            // 
            // p_roadLine4
            // 
            this.p_roadLine4.BackColor = System.Drawing.Color.White;
            this.p_roadLine4.Location = new System.Drawing.Point(543, 297);
            this.p_roadLine4.Name = "p_roadLine4";
            this.p_roadLine4.Size = new System.Drawing.Size(90, 20);
            this.p_roadLine4.TabIndex = 5;
            this.p_roadLine4.TabStop = false;
            // 
            // p_roadLine3
            // 
            this.p_roadLine3.BackColor = System.Drawing.Color.White;
            this.p_roadLine3.Location = new System.Drawing.Point(371, 297);
            this.p_roadLine3.Name = "p_roadLine3";
            this.p_roadLine3.Size = new System.Drawing.Size(90, 20);
            this.p_roadLine3.TabIndex = 4;
            this.p_roadLine3.TabStop = false;
            // 
            // p_roadLine2
            // 
            this.p_roadLine2.BackColor = System.Drawing.Color.White;
            this.p_roadLine2.Location = new System.Drawing.Point(195, 297);
            this.p_roadLine2.Name = "p_roadLine2";
            this.p_roadLine2.Size = new System.Drawing.Size(90, 20);
            this.p_roadLine2.TabIndex = 3;
            this.p_roadLine2.TabStop = false;
            // 
            // p_roadLine1
            // 
            this.p_roadLine1.BackColor = System.Drawing.Color.White;
            this.p_roadLine1.Location = new System.Drawing.Point(12, 297);
            this.p_roadLine1.Name = "p_roadLine1";
            this.p_roadLine1.Size = new System.Drawing.Size(90, 20);
            this.p_roadLine1.TabIndex = 2;
            this.p_roadLine1.TabStop = false;
            // 
            // p_road
            // 
            this.p_road.BackColor = System.Drawing.Color.Gray;
            this.p_road.Location = new System.Drawing.Point(0, 174);
            this.p_road.Name = "p_road";
            this.p_road.Size = new System.Drawing.Size(997, 336);
            this.p_road.TabIndex = 1;
            this.p_road.TabStop = false;
            // 
            // p_tree1
            // 
            this.p_tree1.BackColor = System.Drawing.Color.Transparent;
            this.p_tree1.Image = global::WindowsForms_RacingGame1.Properties.Resources.Picture_Tree1;
            this.p_tree1.Location = new System.Drawing.Point(73, 12);
            this.p_tree1.Name = "p_tree1";
            this.p_tree1.Size = new System.Drawing.Size(122, 178);
            this.p_tree1.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.p_tree1.TabIndex = 8;
            this.p_tree1.TabStop = false;
            // 
            // p_tree2
            // 
            this.p_tree2.BackColor = System.Drawing.Color.Transparent;
            this.p_tree2.Image = global::WindowsForms_RacingGame1.Properties.Resources.Picture_Tree2;
            this.p_tree2.Location = new System.Drawing.Point(439, 56);
            this.p_tree2.Name = "p_tree2";
            this.p_tree2.Size = new System.Drawing.Size(105, 134);
            this.p_tree2.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.p_tree2.TabIndex = 8;
            this.p_tree2.TabStop = false;
            // 
            // p_tree3
            // 
            this.p_tree3.Image = global::WindowsForms_RacingGame1.Properties.Resources.Picture_Tree3;
            this.p_tree3.Location = new System.Drawing.Point(777, 12);
            this.p_tree3.Name = "p_tree3";
            this.p_tree3.Size = new System.Drawing.Size(122, 194);
            this.p_tree3.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.p_tree3.TabIndex = 8;
            this.p_tree3.TabStop = false;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.SkyBlue;
            this.ClientSize = new System.Drawing.Size(996, 511);
            this.Controls.Add(this.p_player);
            this.Controls.Add(this.lbl_restart);
            this.Controls.Add(this.lbl_score);
            this.Controls.Add(this.p_car2);
            this.Controls.Add(this.p_car1);
            this.Controls.Add(this.p_roadLine6);
            this.Controls.Add(this.p_roadLine5);
            this.Controls.Add(this.p_roadLine4);
            this.Controls.Add(this.p_roadLine3);
            this.Controls.Add(this.p_roadLine2);
            this.Controls.Add(this.p_roadLine1);
            this.Controls.Add(this.p_road);
            this.Controls.Add(this.p_tree1);
            this.Controls.Add(this.p_tree2);
            this.Controls.Add(this.p_tree3);
            this.Name = "Form1";
            this.Text = "Racing Game";
            this.KeyDown += new System.Windows.Forms.KeyEventHandler(this.Form1_KeyDown);
            ((System.ComponentModel.ISupportInitialize)(this.p_player)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.p_car2)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.p_car1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.p_roadLine6)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.p_roadLine5)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.p_roadLine4)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.p_roadLine3)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.p_roadLine2)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.p_roadLine1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.p_road)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.p_tree1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.p_tree2)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.p_tree3)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

		}

		#endregion

		private System.Windows.Forms.PictureBox p_road;
		private System.Windows.Forms.PictureBox p_roadLine1;
		private System.Windows.Forms.PictureBox p_roadLine2;
		private System.Windows.Forms.PictureBox p_roadLine4;
		private System.Windows.Forms.PictureBox p_roadLine3;
		private System.Windows.Forms.PictureBox p_roadLine6;
		private System.Windows.Forms.PictureBox p_roadLine5;
		private System.Windows.Forms.PictureBox p_tree1;
		private System.Windows.Forms.PictureBox p_tree2;
		private System.Windows.Forms.PictureBox p_tree3;
		private System.Windows.Forms.PictureBox p_player;
		private System.Windows.Forms.PictureBox p_car1;
		private System.Windows.Forms.PictureBox p_car2;
		private System.Windows.Forms.Timer timer;
		private System.Windows.Forms.Label lbl_score;
		private System.Windows.Forms.Label lbl_restart;
	}
}


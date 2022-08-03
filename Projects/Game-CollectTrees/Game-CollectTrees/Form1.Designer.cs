
namespace Game_CollectTrees
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
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
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            this.picPlayer = new System.Windows.Forms.PictureBox();
            this.lblScore = new System.Windows.Forms.Label();
            this.lblGameStatus = new System.Windows.Forms.Label();
            this.picTree2 = new System.Windows.Forms.PictureBox();
            this.picTree3 = new System.Windows.Forms.PictureBox();
            this.picTree1 = new System.Windows.Forms.PictureBox();
            this.timer1 = new System.Windows.Forms.Timer(this.components);
            this.lblSpeed = new System.Windows.Forms.Label();
            ((System.ComponentModel.ISupportInitialize)(this.picPlayer)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picTree2)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picTree3)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.picTree1)).BeginInit();
            this.SuspendLayout();
            // 
            // picPlayer
            // 
            this.picPlayer.Image = global::Game_CollectTrees.Properties.Resources.Picture_Car3;
            this.picPlayer.Location = new System.Drawing.Point(519, 290);
            this.picPlayer.Name = "picPlayer";
            this.picPlayer.Size = new System.Drawing.Size(135, 59);
            this.picPlayer.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.picPlayer.TabIndex = 0;
            this.picPlayer.TabStop = false;
            // 
            // lblScore
            // 
            this.lblScore.AutoSize = true;
            this.lblScore.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(0)))), ((int)(((byte)(192)))), ((int)(((byte)(192)))));
            this.lblScore.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.lblScore.Location = new System.Drawing.Point(589, 9);
            this.lblScore.Name = "lblScore";
            this.lblScore.Size = new System.Drawing.Size(56, 21);
            this.lblScore.TabIndex = 1;
            this.lblScore.Text = "Score: ";
            // 
            // lblGameStatus
            // 
            this.lblGameStatus.AutoSize = true;
            this.lblGameStatus.Font = new System.Drawing.Font("Segoe UI", 20F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.lblGameStatus.ForeColor = System.Drawing.Color.Maroon;
            this.lblGameStatus.Location = new System.Drawing.Point(184, 165);
            this.lblGameStatus.Name = "lblGameStatus";
            this.lblGameStatus.Size = new System.Drawing.Size(0, 37);
            this.lblGameStatus.TabIndex = 2;
            // 
            // picTree2
            // 
            this.picTree2.Image = global::Game_CollectTrees.Properties.Resources.Picture_Tree3;
            this.picTree2.Location = new System.Drawing.Point(305, 75);
            this.picTree2.Name = "picTree2";
            this.picTree2.Size = new System.Drawing.Size(87, 87);
            this.picTree2.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.picTree2.TabIndex = 0;
            this.picTree2.TabStop = false;
            // 
            // picTree3
            // 
            this.picTree3.Image = global::Game_CollectTrees.Properties.Resources.Picture_Tree2;
            this.picTree3.Location = new System.Drawing.Point(571, 109);
            this.picTree3.Name = "picTree3";
            this.picTree3.Size = new System.Drawing.Size(74, 83);
            this.picTree3.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.picTree3.TabIndex = 0;
            this.picTree3.TabStop = false;
            // 
            // picTree1
            // 
            this.picTree1.Image = global::Game_CollectTrees.Properties.Resources.Picture_Tree1;
            this.picTree1.Location = new System.Drawing.Point(26, 9);
            this.picTree1.Name = "picTree1";
            this.picTree1.Size = new System.Drawing.Size(69, 87);
            this.picTree1.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.picTree1.TabIndex = 0;
            this.picTree1.TabStop = false;
            // 
            // timer1
            // 
            this.timer1.Enabled = true;
            this.timer1.Interval = 50;
            this.timer1.Tick += new System.EventHandler(this.timer1_Tick);
            // 
            // lblSpeed
            // 
            this.lblSpeed.AutoSize = true;
            this.lblSpeed.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(0)))), ((int)(((byte)(192)))), ((int)(((byte)(192)))));
            this.lblSpeed.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.lblSpeed.Location = new System.Drawing.Point(589, 41);
            this.lblSpeed.Name = "lblSpeed";
            this.lblSpeed.Size = new System.Drawing.Size(60, 21);
            this.lblSpeed.TabIndex = 1;
            this.lblSpeed.Text = "Speed: ";
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 15F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.MenuHighlight;
            this.BackgroundImage = global::Game_CollectTrees.Properties.Resources.Sunrise_over_beautiful_landscape;
            this.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this.ClientSize = new System.Drawing.Size(684, 361);
            this.Controls.Add(this.lblGameStatus);
            this.Controls.Add(this.lblSpeed);
            this.Controls.Add(this.lblScore);
            this.Controls.Add(this.picTree3);
            this.Controls.Add(this.picTree2);
            this.Controls.Add(this.picTree1);
            this.Controls.Add(this.picPlayer);
            this.Name = "Form1";
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.KeyDown += new System.Windows.Forms.KeyEventHandler(this.Form1_KeyDown);
            ((System.ComponentModel.ISupportInitialize)(this.picPlayer)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picTree2)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picTree3)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.picTree1)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.PictureBox picPlayer;
        private System.Windows.Forms.Label lblScore;
        private System.Windows.Forms.Label lblGameStatus;
        private System.Windows.Forms.PictureBox picTree2;
        private System.Windows.Forms.PictureBox picTree3;
        private System.Windows.Forms.PictureBox pic;
        private System.Windows.Forms.PictureBox picTree1;
        private System.Windows.Forms.Timer timer1;
        private System.Windows.Forms.Label lblSpeed;
    }
}


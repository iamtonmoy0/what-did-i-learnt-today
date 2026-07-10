package com.example.myapplication

import android.graphics.Color
import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import androidx.core.view.isVisible

class MainActivity : AppCompatActivity() {
    private lateinit var btn1: Button
    private lateinit var btn2: Button
    private lateinit var text: TextView



    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_main)
        btn1=findViewById(R.id.btn1)
        btn2=findViewById(R.id.btn2)
        text=findViewById(R.id.txt)


        btn1.setOnClickListener {
            btn1.setBackgroundColor(Color.GRAY)
            text.setText("I have changed the text")
            text.isVisible=false
        }
        btn2.setOnClickListener {
            text.isVisible=true
        }


        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main)) { v, insets ->
            val systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars())
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom)
            insets
        }
    }
}